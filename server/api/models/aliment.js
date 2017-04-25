import mongoose from 'mongoose';
import User from './user.js';
import Categorie from './categorie.js';

const alimentSchema = new mongoose.Schema({
    nom: {
      type: String
    },
    categorie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Categorie'
    },
    description: {
      type: String
    },
    suggestion: [{
      type: String
    }],
    composition: [{
      type: String
    }],
});

let model = mongoose.model('Aliment', alimentSchema);

export default class Aliment {

    findAll(req, res) {
        model.find({}, (err, aliments) => {
            if (err || !aliments) {
                res.sendStatus(403);
            } else {
                res.json(aliments);
            }
        });
    }

}
