import React, { useState } from "react";

export function CommentForm() {
    const [selectedRating, setSelectedRating] = useState<number | null>(null);
    const [commentText, setCommentText] = useState("");

    const canSubmit = selectedRating !== null && commentText.trim().length >= 50;

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!canSubmit) return;

        console.log({ selectedRating, commentText });
        setSelectedRating(null);
        setCommentText("");
    };

    const getStarLabel = (value: number): string => {
        const labels: { [key: number]: string } = {
            5: "Excellent",
            4: "Very Good",
            3: "Average",
            2: "Poor",
            1: "Awful"
        };
        return labels[value] || "";
    };

    return (
        <form className="reviews__form form" onSubmit={handleFormSubmit}>
            <label htmlFor="comment" className="reviews__label form__label">Leave your comment</label>

            <div className="form__rating reviews__rating-form">
                {[1, 2, 3, 4, 5].reverse().map((value) => (
                    <React.Fragment key={value}>
                        <input
                            className="form__rating-input visually-hidden"
                            type="radio"
                            name="rating"
                            id={`star-${value}`}
                            value={value}
                            checked={selectedRating === value}
                            onChange={() => setSelectedRating(value)}
                        />
                        <label
                            htmlFor={`star-${value}`}
                            title={getStarLabel(value)}
                            className="form__rating-label reviews__rating-label"
                        >
                            <svg className="form__star-image" width="37" height="33">
                                <use xlinkHref="#icon-star"></use>
                            </svg>
                        </label>
                    </React.Fragment>
                ))}
            </div>

            <textarea
                className="form__textarea reviews__textarea"
                id="comment"
                name="comment"
                placeholder="What did you think about the place?"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
            />

            <div className="reviews__button-wrapper">
                <p className="reviews__help">
                    Please select a <span className="reviews__star">rating</span> and write at least <b className="reviews__text-amount">50 characters</b> to submit your comment.
                </p>
                <button className="button reviews__submit form__submit" type="submit" disabled={!canSubmit}>
                    Send
                </button>
            </div>
        </form>
    );
}
