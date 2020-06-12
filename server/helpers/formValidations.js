const joi = require('@hapi/joi');

function validateNotesForm(note) {
  const schema = joi.object({
    header: joi.string().min(5).max(40).trim().required().messages({
      'string.base': 'Header of the note should be a type of text',
      'string.empty': 'Header of the note can not be empty.',
      'string.min': 'Header of the note length must be at least {#limit} characters long.',
      'string.max': 'Header of the note length must be at most {#limit} characters long.',
      'any.required': 'Header of the note is required',
    }),
    body: joi.string().min(15).max(300).trim().required().messages({
      'string.base': 'Body of the note should be a type of text',
      'string.empty': 'Body of the note can not be empty.',
      'string.min': 'Body of the note length must be at least {#limit} characters long.',
      'string.max': 'Body of the note length must be at most {#limit} characters long.',
      'any.required': 'Body of the note is required',
    }),
    nickname: joi.string().min(3).max(15).trim().required().messages({
      'string.base': 'Nickname of the note should be a type of text',
      'string.empty': 'Nickname of the note can not be empty.',
      'string.min': 'Nickname of the note length must be at least {#limit} characters long.',
      'string.max': 'Nickname of the note length must be at most {#limit} characters long.',
      'any.required': 'Nickname of the note is required',
    }),
    songname: joi.string().trim().required().messages({
      'string.base': 'Songname of the song should be a type of text',
      'string.empty': 'Songname of the song can not be empty.',
      'string.min': 'Songname of the song length must be at least {#limit} characters long.',
      'string.max': 'Songname of the song length must be at most {#limit} characters long.',
      'any.required': 'Songname of the song is required',
    }),
    artistname: joi.string().trim().required().messages({
      'string.base': 'Artist name  of the song should be a type of text',
      'string.empty': 'Artist name  of the song can not be empty.',
      'string.min': 'Artist name  of the song length must be at least {#limit} characters long.',
      'string.max': 'Artist name  of the song length must be at most {#limit} characters long.',
      'any.required': 'Artist name  of the song is required',
    }),
    songid: joi.string().required().messages({
      'string.base': 'Songid of the song should be a type of text',
      'string.empty': 'Songid of the song can not be empty.',
      'string.min': 'Songid of the song length must be at least {#limit} characters long.',
      'string.max': 'Songid of the song length must be at most {#limit} characters long.',
      'any.required': 'Songid of the song is required',
    }),
    bestPart: joi.object().required().messages({
      'any.required': 'Bestpart of the song is required',
    }),
    artistimage: joi
      .string()
      .required()
      .messages({ 'string.empty': 'Artist image of the song can not be empty.', 'any.required': 'Artist image of the song is required' }),
  });
  const { error } = schema.validate(note, { abortEarly: false });
  return extractErrorMessages(error);
}
function extractErrorMessages(error) {
  let errMessages = [];
  if (error) error.details.forEach((errMsg) => errMessages.push(errMsg.message));
  return errMessages;
}
exports.validateNotesForm = validateNotesForm;
