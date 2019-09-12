import NewsRepository from "../repository/newsRepository";

class NewsService {
    /**
     * Traz todos os registros.
     */
    get() {
        return NewsRepository.find({});
    }

    /**
     * Traz o registro que possui o id passado.
     *
     * @param _id 
     */
    getById(_id) {
        return NewsRepository.findById(_id);
    }

    /**
     * Insere um novo registro no banco.
     *
     * @param news 
     */
    create(news) {
        return NewsRepository.create(news);
    }

    /**
     * Atualiza um registro com o id passado e altera para as novas informações passadas.
     *
     * @param _id 
     * @param news 
     */
    update(_id, news) {
        return NewsRepository.findByIdAndUpdate(_id, news);
    }

    /**
     * Deleta o dado que possui o id passado por parâmetro.
     *
     * @param _id 
     */
    delete(_id) {
        return NewsRepository.findByIdAndRemove(_id);
    }
}

export default new NewsService();