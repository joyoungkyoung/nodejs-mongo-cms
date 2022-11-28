import * as mongoose from "mongoose";
const dbUrl = process.env.MONGO_URL;

const connect = () => {
	if (process.env.NODE_ENV !== "production") {
		mongoose.set("debug", true); // 몽고 쿼리가 콘솔에 뜨게 함
	}

	mongoose.connect(dbUrl!, { dbName: "multi-cms" }, error => {
		if (error) {
			console.error("mongo connection error : ", error);
		} else {
			console.log("mongo db is connected!");
		}
	});
};

mongoose.connections[0].on("error", error => {
	console.error("mongo error", error);
});

mongoose.connections[0].on("disconnected", () => {
	console.error("mongo disconnected... try again");
	connect();
});

export { connect };
