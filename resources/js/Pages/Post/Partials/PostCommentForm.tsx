import { useForm } from '@inertiajs/react'
import React from 'react'

const PostCommentForm = ({post_id} : {post_id: number}) => {
    const {data, setData, post, reset} = useForm({
        body: '',
    })
  return (
  <>
            <form onSubmit={(e) => {e.preventDefault(); post(`/posts/${post_id}/comment`, {
                preserveScroll: true
            }
            ); reset('body') }}>
                <div className="mb-3 position-relative post-reviews">
  <textarea
    value={data.body}
    onChange={(e) => {
      const value = e.target.value.replace(/\n/g, "").slice(0, 255); // Remove new lines & limit characters
      setData("body", value);
    }}
    onKeyDown={(e) => {
      if (e.key === "Enter") e.preventDefault(); // Prevent line breaks
    }}
    className="form-control rounded-2 pe-5"
    id="exampleFormControlTextarea1"
    placeholder="Write a review"
    maxLength={255} // Ensures no more than 255 characters
    style={{ resize: "none", whiteSpace: "nowrap", overflow: "hidden", height: "150px" }} // Prevents multi-line input
  ></textarea>
  <button
    className="btn btn-primary position-absolute d-inline-flex align-items-center gap-2"
    style={{
      bottom: "0.75rem",
      right: "0.75rem",
    }}
  >
    Submit Comment
  </button>
</div>

            </form>

        </>
  )
}

export default PostCommentForm
