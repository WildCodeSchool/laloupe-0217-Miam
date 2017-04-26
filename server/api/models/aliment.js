import mongoose from 'mongoose';
import User from './user.js';

const alimentSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    compte: [{
      type: Boolean
    }],
    contreindication: {
      type: Boolean,
      default: false
    }
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
