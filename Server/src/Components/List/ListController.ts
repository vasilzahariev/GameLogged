/*
 * @file ListController.ts
 * @author vasil
 * @created 12/27/23, 1:08 AM
 * @modified 12/27/23, 1:08 AM
 */

import { BaseController } from "../Base/BaseController";
import { IList } from "./IList";
import ListModel from "./ListModel";

class ListController extends BaseController<IList> {
	constructor() {
		super(ListModel);
	}
}

export default new ListController();
