import Button from '@/Components/ui/Button'
import Layout from '@/Layouts/Layout'
import { Link, usePage } from '@inertiajs/react'
import React from 'react'
import PostCommentCard from './Partials/PostCommentCard'
import BlogCommentForm from './Partials/PostCommentForm'
import PostCommentForm from './Partials/PostCommentForm'
import { PaginatedCollection } from '@/types/global'
import { FacebookShareButton, TwitterShareButton } from 'react-share'
import CopyToClipboard from '@/Components/CopyToClipboard'
import MetaTags from '@/Components/MetaTags'

const Show = ({post, comments, is_liked, is_unliked}: {
    post: App.Data.PostData,
    comments: PaginatedCollection<App.Data.CommentData>,
    is_liked: boolean,
    is_unliked: boolean

}) => {

    const user = usePage().props.auth.user
    let currentUrl = `https://urpuppy.com/posts/${post.slug}`;
    console.log(is_liked, is_unliked)
  return (
        <Layout navType="secondary">

       <MetaTags url={currentUrl} title={post.title} description={post.excerpt} image={post.banner_url} />
        <section className="puppy-spotlight py-7 py-md-5 py-xl-9" id="scroll-target">
          <div className="container" >
            <div className="mb-8">
                <span style={{
                            backgroundColor: 'rgba(0, 122, 255, 0.1)',
                            color: 'rgba(0, 122, 255, 1)',
                            fontWeight: '500'
                        }} className="btn py-1 mb-3">{post.category.name}</span>
                <h1 className="mb-2">
                            {post.title}
                        </h1>
                <p className="fs-4">
                            {post.excerpt}
                            </p>
            </div>

            <div className="d-flex  flex-column flex-sm-column flex-md-row  align-items-center justify-content-between  ">
                        <div className="d-flex gap-3 mb-2">
                            <img src={post.author.photo_url} className="rounded-circle object-fit-cover" width="50" height="50" />
                            <div>
                                <h6 style={{
                                    marginBottom: 'unset'
                                }} className="btn-link fs-5 font-work-sans">
                                    {post.author.name}
                                </h6>
                                <span>
                                    Author
                                </span>
                            </div>
                        </div>



                        <div
  className="d-flex justify-content-center align-items-center mb-2 gap-md-4 gap-3"
  style={{ height: "24px" }}
>
  <div className="d-flex align-items-center gap-2">
    <img src="../images/svgs/icon-time.svg" alt="" width="18" height="18" />
    <p style={{
                                    marginBottom: '0.5px'
                                }} className=" fs-3">{post.published_at_formatted}</p>
  </div>

  {/* Divider */}
  <div style={{ width: "1px", background: "rgba(8, 49, 78, 0.4)", height: "12px" }}></div>

  <div className="d-flex align-items-center gap-2">
    <Link
      only={['post', 'is_liked', 'is_unliked']}
      className="bg-white border-0"
      method="post"
      href={`/posts/${post.id}/react/Like`}
    >
      <img
        style={{ filter: is_liked ? "brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(2636%) hue-rotate(195deg) brightness(96%) contrast(104%)" : "" }}
        src="../images/svgs/icon-like.svg"
        alt=""
        width="18"
        height="18"
      />
    </Link>
    <p
style={{
                                    marginBottom: '0.5px'
                                }}
                                    className="fs-3">{post.like_count}</p>
  </div>

  {/* Divider */}
  <div style={{ width: "1px", background: "rgba(8, 49, 78, 0.4)", height: "12px" }}></div>

  <div className="d-flex align-items-center gap-2">
    <Link
      only={['post', 'is_liked', 'is_unliked']}
      className="bg-white border-0"
      method="post"
      href={`/posts/${post.id}/react/Unlike`}
    >
      <img src="../images/svgs/icon-dislike.svg" alt="" width="18" height="18" />
    </Link>
    <p

                                    style={{
                                    marginBottom: '0.5px'
                                }}
                                    className="fs-3">{post.unlike_count}</p>
  </div>

  {/* Divider */}
  <div style={{ width: "1px", background: "rgba(8, 49, 78, 0.4)", height: "12px" }}></div>

  <div className="d-flex align-items-center gap-2">
    <img src="../images/svgs/icon-eye.svg" alt="" width="18" height="18" />
    <p className="mb-0 fs-3">{post.view_count} Views</p>
  </div>
</div>



            </div>

                        <div
                        className="rounded-2 mb-4 mt-4"

                        style={{
                            backgroundImage: `url('${post.banner_url}')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                        height: "500px"
                        }}>


                        </div>

                    <div
style={{
                            maxWidth: '904px',
                            margin: '0 auto'
                        }}

                    >


                    <div
                        dangerouslySetInnerHTML={{
                            __html: post.content
                        }}
                    >


                    </div>


                    <div
                        className="mb-8 mt-8"

                        style={{
                        background: 'rgba(8, 49, 78, 0.1)',
                        width: "100%",
                        height: "1px"
                    }}>

                    </div>

                    <div className="d-flex mb-8 flex-column flex-md-row text-center" style={{
                        justifyContent: "space-between"
                    }}>
                        <div>
                            <span className="fs-3 mt-4 mb-4"
                                style={{
                                    color: "rgba(8, 49, 78, 0.8)"
                                }}

                            >
                            Share this blog:
                            </span>
                        </div>

                        <div className="d-flex gap-2 justify-content-center">
                            <CopyToClipboard link={currentUrl} />

                              <FacebookShareButton url={currentUrl} >
                            <a href="" data-bs-toggle="tooltip" data-bs-title="Instagram" className="bg-white border bg-opacity-10 d-flex align-items-center justify-content-center round-40 rounded-circle"><img loading="lazy" src="/images/svgs/icon-facebook-dark.svg" alt="" /></a>

                                </FacebookShareButton>


                            <TwitterShareButton url={currentUrl}>
                            <a href="#" data-bs-toggle="tooltip" data-bs-title="Instagram" className="bg-white border bg-opacity-10 d-flex align-items-center justify-content-center round-40 rounded-circle"><img loading="lazy" src="/images/svgs/icon-twitter-dark.svg" alt="" /></a>
                                </TwitterShareButton>


                        </div>

                    </div>

                    <div className="card border mt-4">
                            <div className="card-body">

                                <h6 className="mb-4">
                        Comments

                                </h6>


                                {user ?
                                <PostCommentForm post_id={post.id} />
                                :
                                <Button className="mb-4" href="/register">
                                    Signup to Comment
                                </Button>
                                }

                                {
                                    comments.data.length > 0 &&
                                    <>
                                    {
                                        comments.data.map((comment: App.Data.CommentData, index: number) => {
                                            return (
                                                <PostCommentCard key={index} comment={comment} />
                                            )
                                        })
                                    }
                                    </>
                                }




                            </div>

                    </div>


                    </div>





          </div>
        </section>
        </Layout>
  )
}

export default Show


