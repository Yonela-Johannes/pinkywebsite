  import Moment from "react-moment";
  function Comment({ comment, user }) {
    return (
      <div className="p-3 flex cursor-pointer border-b border-[#e2e2e2]">
        <img
          src={comment?.userImg}
          alt=" avatar "
          className="h-[30px] w-[30px] rounded-full mr-4"
        />
        <div className="flex flex-col space-y-2 w-full">
          <div className="flex justify-between">
            <div className="text-[#6e767d]">
              <div className="inline-block group">
                <h4 className="font-bold text-[#d9d9d9] text-[15px] sm:text-base inline-block group-hover:underline">
                  {comment?.username}
                </h4>
                <span className="ml-1.5 text-[11px] sm:text-[12px]">
                  @bepleasuredbypinky{" "}
                </span>
              </div>{" "}
              ·{" "}
              <p className="text-[#1a1a1a] mt-0.5 max-w-lg text-[16px] sm:text-base">
                {comment?.comment}
              </p>
              <span className="hover:underline text-sm sm:text-[11px]">
                <Moment fromNow>{comment?.timestamp?.toDate()}</Moment>
              </span>
            </div>
          </div>
          </div>
      </div>
    );
  }
  
  export default Comment;