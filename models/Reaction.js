const { Schema, Types } = require('mongoose');
const reactionSchema = require('./Reaction');

const reactionSchema = new Schema(
    {
        reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
        reactionBody: { type: String, required: true, min: 1, max: 280 },
        username: { type: String, required: true },
        createdAt: { type: Date, default: Date.now, get: (date) => new Date(date).toLocaleDateString() },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

module.exports = reactionSchema;
