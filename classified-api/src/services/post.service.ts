import PostModel from "../models/post.model";
import negotiationModel from "../models/negotiation.model";

export class PostService {
  getAll = async () => {
    const allPosts = await PostModel.find({}).populate("posted_by").populate('negotiations');
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

  createOrUpdateNegotiatePost = async payload => {
    const { isFirstContact, ...rest } = payload;
    // if (isFirstContact) {
      // create the negotiation
      console.log("is first contact", {...rest });
      const negotiation = new negotiationModel({ ...rest });
      await PostModel.update(
        { _id: payload.postId },
        { $push: { negotiations: negotiation } }
      );
      return await negotiation.save();
    // } else {
    //   console.log('setting reply', {...rest})
    //      let result = await negotiationModel.findOneAndUpdate(
    //     { _id: payload.negotiationId, isReplied: false},
    //     {'body.reply': payload.body.message, isReplied: true},
    //     { sort: {'lastUpdated': -1}, new: true }
    //   );
    //     if(result === null){
    //       console.log('result is null')
    //     result = new negotiationModel({ ...rest });
    //       await PostModel.update(
    //         { _id: payload.postId },
    //         { $push: { negotiations: result } }
    //       );
    //       return await result.save();
    //     }
    //   return result
    // }
  };

  getUserNegotiationsAll = async (userId) => {
    const userNegotiations =  await negotiationModel.find({ 'body.from': userId}).populate('postId')
    return userNegotiations;
  }

  getNegotiationByUserForPost = async(from, postId, to) => {
    const result =  await negotiationModel.find({postId, $or:[{ 'body.from':from, 'body.to':to }, { 'body.to':from, 'body.from':to }]});
    return result;
  }
}
export const postService = new PostService();
