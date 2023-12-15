export const convertToObjectIdMongoDB = (id) => {
  return new Types.ObjectId(id);
};

export const asyncHandler = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
