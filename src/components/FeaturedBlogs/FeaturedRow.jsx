
const FeaturedRow = ({ blogData, i }) => {
    const { title, authorImg, authorName } = blogData;
  return (
    <tr>
      <td>{i+1}</td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={authorImg} />
            </div>
          </div>
          <div>
            <div className="font-bold">{authorName}</div>
          </div>
        </div>
      </td>
      <td>{title}</td>
    </tr>
  );
};

export default FeaturedRow;
