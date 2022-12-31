
import mongoose from "mongoose";

class DBconnect {
    async connect() {
        await mongoose.connect('mongodb+srv://CaseStudy5:!23456@case-study5.6tr4igy.mongodb.net/?retryWrites=true&w=majority')
    }
}

export default DBconnect;