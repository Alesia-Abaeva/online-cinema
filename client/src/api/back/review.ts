import { REVIEW } from 'src/const/api/url';
import { backCall } from '../api';

export const createReview = async (body: CreateReviewData) =>
  backCall.put<CreateReviewData, AuthGetPersonToken>(REVIEW, body);
