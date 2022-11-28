import { ResError, ResponseFailed, ResponseSuccess, SystemError } from "../handler/Response";
import { Request, Response } from "express";
import ProjectDB from "../repo/Project";
import ProjectCollectionDB from "../repo/ProjectCollection";

export const createProjectCollection = async (req: Request, res: Response) => {
	const { projectId, collectionName, columnArr } = req.body;
	try {
		const project = await ProjectDB.findProjectById(projectId);
		if (!project) {
			return ResponseFailed(res, ResError.NOT_FOUND_DATA);
		}

		const data: any = await ProjectCollectionDB.createProjectCollection({
			project_id: projectId,
			collection_name: collectionName,
			columns: columnArr
		});
		return ResponseSuccess(res, data);
	} catch (e: any) {
		SystemError(res, e);
	}
};
