/*
 * @file ReviewController.ts
 * @author vasil
 * @created 12/27/23, 12:55 AM
 * @modified 12/27/23, 12:55 AM
 */

import { BaseController } from "../Base/BaseController";
import { IReview } from "./IReview";
import ReviewModel from "./ReviewModel";

class ReviewController extends BaseController<IReview> {
	constructor() {
		super(ReviewModel);
	}
}

export default new ReviewController();
