import PostModel from "../models/post.model";

export class PostService {

  getAll = async () => {
    const allPosts = await PostModel.find({})
      .populate("posted_by");
    return allPosts;
  };

  createPost = async postPayload => {
    const newPost = new PostModel({
      post_title: postPayload.postTitle,
      post_img_url: postPayload.imgUrl,
      post_details: postPayload.postDetails,
      post_category: postPayload.postCategory,
      created_date: postPayload.createdDate,
      last_updated: postPayload.updatedDate,
      is_active: postPayload.isActive,
      is_seller: postPayload.isSeller,
      is_individual: postPayload.isIndividual,
      posted_by: postPayload.user.id,
      is_price_negotiable: postPayload.priceNegotiable,
      expected_price: postPayload.expectedPrice
    });

    return await newPost.save();
  };

  updatePost = async (id, postPayload) => {
    return null;
  };

  deletePost = async id => {
    return null;
  };

  getPost = async id => {
    return null;
  };
}
export const postService = new PostService();
