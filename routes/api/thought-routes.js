const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    delReaction
} = require('../../controllers/thoughtController.js');

router
.route('/')
.get(getAllThoughts)
.post(createThought);

router
.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

router
.route('/:thoughtId/reactions')
.post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(delReaction);

module.exports = router;