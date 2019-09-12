"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newsRepository_1 = require("../repository/newsRepository");
class NewsService {
    /**
     * Traz todos os registros.
     */
    get() {
        return newsRepository_1.default.find({});
    }
    /**
     * Traz o registro que possui o id passado.
     *
     * @param _id
     */
    getById(_id) {
        return newsRepository_1.default.findById(_id);
    }
    /**
     * Insere um novo registro no banco.
     *
     * @param news
     */
    create(news) {
        return newsRepository_1.default.create(news);
    }
    /**
     * Atualiza um registro com o id passado e altera para as novas informações passadas.
     *
     * @param _id
     * @param news
     */
    update(_id, news) {
        return newsRepository_1.default.findByIdAndUpdate(_id, news);
    }
    /**
     * Deleta o dado que possui o id passado por parâmetro.
     *
     * @param _id
     */
    delete(_id) {
        return newsRepository_1.default.findByIdAndRemove(_id);
    }
}
exports.default = new NewsService();
