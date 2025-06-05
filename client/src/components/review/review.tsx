import { Review } from "../../types/review";

type Props = {
  item: Review;
};

function ReviewItem({ item }: Props) {
  const reviewDate = new Date(item.date);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
  }).format(reviewDate);

  return (
    <li className="review-block">
      <div className="review-user">
        <div className="avatar-box">
          <img
            className="avatar-img"
            src={item.user.avatarUrl}
            width={54}
            height={54}
            alt="User avatar"
          />
        </div>
        <div className="user-details">
          <span className="user-name">{item.user.name}</span>
          {item.user.isPro && <span className="user-badge">PRO</span>}
        </div>
      </div>

      <div className="review-content">
        <div className="rating-stars">
          <div className="stars-filled" style={{ width: `${item.rating * 20}%` }}></div>
          <span className="visually-hidden">Rating score</span>
        </div>

        <p className="review-comment">{item.comment}</p>
        <time className="review-date" dateTime={item.date}>
          {formattedDate}
        </time>
      </div>
    </li>
  );
}

export { ReviewItem };
