import {createConnection} from "typeorm";

class Connection{

    async connected(){
        try {
            return await createConnection()
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

export default new Connection()