/**
 * @swagger
 * /users/{userId}/settings:
 *   get:
 *     summary: Retrieve the settings of a user
 *     parameters:
 *      - in: path
 *        name: userId
 *        required: true
 *        type: integer
 *   post:
 *     summary: Create or update the setting of the user
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/requestBodies/UserSettingBody'
 *     parameters:
 *      - in: path
 *        name: userId
 *        type: integer
 *        required: true
 *     responses:
 *      200:
 *       content:
 *        application/json:
 *         schema:
 *          $ref: '#/components/schemas/UserSetting'
 *   patch:
 *     summary: Create or update the setting of the user
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/requestBodies/UserSettingBody'
 *     parameters:
 *      - in: path
 *        name: userId
 *        type: integer
 *        required: true
 *     responses:
 *      200:
 *       content:
 *        application/json:
 *         schema:
 *          $ref: '#/components/schemas/UserSetting'
 *   put:
 *     summary: Create or update the setting of the user
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/requestBodies/UserSettingBody'
 *     parameters:
 *      - in: path
 *        name: userId
 *        type: integer
 *        required: true
 *     responses:
 *      200:
 *       content:
 *        application/json:
 *         schema:
 *          $ref: '#/components/schemas/UserSetting'
 */

const express = require('express');
const { get, createOrUpdate } = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.get('/:userId/settings', get);

userRouter
  .route('/:userId/settings')
  .post(createOrUpdate)
  .put(createOrUpdate)
  .patch(createOrUpdate);

module.exports = userRouter;
