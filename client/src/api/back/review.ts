import { REVIEW } from 'src/const/api/url';
import { backCall } from '../api';

export const createReview = async (body: CreateReviewData) =>
  backCall.put<CreateReviewData, AuthGetPersonToken>(REVIEW, body);

// export const deleteReview = async (body: ) =>
//   backCall.put<UserFolderData, AuthGetPersonToken>(DELETE_USER_FOLDER, body);

export const getUserReviews = async () => backCall.get<AuthGetPersonToken>(REVIEW);
