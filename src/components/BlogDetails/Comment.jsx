const Comment = ({cmnt}) => {
    const { comment, userName, userPhoto } = cmnt;
    return (
      <div className="flex gap-3 items-center mb-5">
        <div className="w-10 rounded-full">
          <img src={userPhoto} className="rounded-full" />
        </div>
        <div>
          <h3 className="font-semibold text-xl">{userName}</h3>
          <p className="">{comment}</p>
        </div>
      </div>
    );
};

export default Comment;