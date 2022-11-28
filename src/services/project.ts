import { ResError, ResponseFailed, ResponseSuccess, SystemError } from "../handler/Response";
import ProjectDB from "../repo/Project";
import { Request, Response } from "express";

export const createProject = async (req: Request, res: Response) => {
	const { name, email, tel } = req.body;
	try {
		// duplicate check
		const isExist: boolean = await ProjectDB.isProjectByName(name);
		if (isExist) {
			return ResponseFailed(res, ResError.ALREADY_EXIST_DATA);
		}

		const data: any = await ProjectDB.createProject(name, email, tel);
		return ResponseSuccess(res, data);
	} catch (e: any) {
		SystemError(res, e);
	}
};
