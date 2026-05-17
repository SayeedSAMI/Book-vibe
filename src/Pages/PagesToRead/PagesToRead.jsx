import { use } from "react";
import { Bar, Cell, BarChart, XAxis, YAxis, Tooltip } from 'recharts';


const bookDataPromise = fetch('/booksData.json').then(res => res.json());

const PagesToRead = () => {

    const promiseData = use(bookDataPromise);
    console.log(promiseData, " book data promise from pages to reload");

    const data = promiseData.map(book => ({
        name: book.bookName,
        uv: book.totalPages,
        pv: book.rating,
        amt: book.yearOfPublishing,
    }));
    const colors = [
        "#0088FE",
        "#00C49F",
        "#FFBB28",
        "#FF8042",
        "#FF0000",
        "#8884d8",
    ];
    const margin = {
        top: 20,
        right: 30,
        left: 20,
        bottom: 80,
    };
    // #endregion

    const getPath = (x, y, width, height) =>
        `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
   Z`;

    function TriangleBar(props) {
        const { fill, x, y, width, height } = props;

        if (x == null || y == null || width == null || height == null) {
            return null;
        }

        return <path d={getPath(Number(x), Number(y), Number(width), Number(height))} stroke="none" fill={fill} />;
    }


    return (
        <div className="p-10 rounded-xl shadow my-10 w-[1200px] mx-auto">

            <BarChart width={1100} height={600} data={data} margin={margin}>
                <XAxis dataKey="name" angle={-20} textAnchor="end" interval={0} />
                <YAxis />
                <Tooltip defaultIndex={2} active />
                <Bar
                    dataKey="uv"
                    shape={TriangleBar}
                >
                    {
                        data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={colors[index % colors.length]}
                            />
                        ))
                    }
                </Bar>
            </BarChart>
        </div>
    );
};

export default PagesToRead;