import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map/use-map';
import { CityOffer, OffersList } from '../../types/offer';

type MapProps = {
  city: CityOffer;
  offers: OffersList[];
  selectedOffer?: OffersList;
};

const ACTIVE_ICON = L.icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [30, 40],
  iconAnchor: [15, 40],
});

const DEFAULT_ICON = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [30, 40],
  iconAnchor: [15, 40],
});

export default function Map({ city, offers, selectedOffer }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.setView(
        [city.location.latitude, city.location.longitude],
        city.location.zoom
      );
    }
  }, [map, city]);

  useEffect(() => {
    if (map) {
      map.eachLayer((layer: L.Layer) => {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });

      offers.forEach((offer) => {
        const isActive = selectedOffer?.id === offer.id;
        L.marker(
          [offer.location.latitude, offer.location.longitude],
          { icon: isActive ? ACTIVE_ICON : DEFAULT_ICON }
        )
          .addTo(map)
          .bindPopup(offer.title);
      });
    }
  }, [map, offers, selectedOffer]);

  return (
    <div
      className="cities__map map"
      ref={mapRef}
      style={{ height: '100%' }}
    />
  );
}
