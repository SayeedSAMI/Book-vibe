import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({ data }) => {



    return (
        <div >
            <Link to={`Bookdetails/${data.bookId}`}  className="card bg-base-100 w-auto shadow-sm h-full mx-auto">
                <figure className="m-5 mb-1 p-6 bg-[#F3F3F3]">
                    <img
                        src={data.image}
                        alt="Shoes"
                        className="rounded-xl w-[45%] h-[190px]" />
                </figure>
                <div className="card-body">
              <div className='flex gap-1.5'>
                      {
                        data.tags.map((d,index) => (
                            <div key={index} className="badge badge-soft badge-success text-[16px] font-medium">{d}</div>
                        ))
                    }
              </div>
                    <h2 className="card-title font-bold text-2xl">{data.bookName}</h2>
                    <p className='font-medium text-[16px]'>by : {data.author}</p>
                    <div className="divider">
                    </div>
                    <div className='flex justify-between  opacity-60 font-medium text-[16px]'>
                        <p>Fiction</p>
                        <div className='flex gap-2 items-center justify-center'>
                            <p className='text-right'>{data.rating}</p><FaRegStar />
                        </div>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BookCard;