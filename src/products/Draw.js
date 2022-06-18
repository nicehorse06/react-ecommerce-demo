import Image from "../NARUTO.png";
import Ratings from "react-ratings-declarative";
import { Link } from "react-router-dom";
import ScrollToTopOnMount from "../template/ScrollToTopOnMount";

const iconPath =
    "M18.571 7.221c0 0.201-0.145 0.391-0.29 0.536l-4.051 3.951 0.96 5.58c0.011 0.078 0.011 0.145 0.011 0.223 0 0.29-0.134 0.558-0.458 0.558-0.156 0-0.313-0.056-0.446-0.134l-5.011-2.634-5.011 2.634c-0.145 0.078-0.29 0.134-0.446 0.134-0.324 0-0.469-0.268-0.469-0.558 0-0.078 0.011-0.145 0.022-0.223l0.96-5.58-4.063-3.951c-0.134-0.145-0.279-0.335-0.279-0.536 0-0.335 0.346-0.469 0.625-0.513l5.603-0.815 2.511-5.078c0.1-0.212 0.29-0.458 0.547-0.458s0.446 0.246 0.547 0.458l2.511 5.078 5.603 0.815c0.268 0.045 0.625 0.179 0.625 0.513z";


let draw_list = [];
for(let i=1;i<=80;i++){
    //記得在JSX中使用JS變數要用花括號包著
    draw_list.push(<a className="btn w-55 m-1 on btn btn-dark" style={{width:'55px'}} inx="0">{i}</a>)
}
    
function Draw() {
    function changeRating(newRating) { }

    return (
        <div className="container mt-5 py-4 px-xl-5">
            <ScrollToTopOnMount />
            <h2 className="mb-1">一番賞《火影忍者 疾風傳》交織的火之意志(日版)</h2>
            <h4 className="text-muted mb-4"> 最後賞  波風湊 模型 約25cm</h4>
            <nav aria-label="breadcrumb" className="bg-custom-light rounded mb-4">
            </nav>
            <div className="row pt-2 paper_body col-lg-6 col-md-8 col-xs-12 mx-auto">
                {draw_list}
            </div>

            <div className="row mb-4 mt-4 justify-content-center">
                <div className="col-lg-5">
                    <div className="d-flex flex-column h-100">
                        <table className="table table-bordered table-striped">
                            <tbody className="pd-table">
                                <tr>
                                    <th className="w-25 white">項目</th>
                                    <th className="w-25 white">原始數量</th>
                                    <th className="w-25 white">剩餘數量</th>
                                    <th className="w-25 white">剩餘抽數</th>
                                </tr>
                                <tr>
                                    <td className="sp_table_txt">A賞 漩渦鳴人 模型 約24cm*
                                    </td>
                                    <td>2</td>
                                    <td>1</td>
                                    <td rowSpan="6">
                                        68</td>
                                </tr>
                                <tr>
                                    <td className="sp_table_txt">B賞 宇智波佐助 模型 約24cm(全2種隨機)*
                                    </td>
                                    <td>3</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td className="sp_table_txt">C賞 旗木卡卡西 模型 約25cm(全2種隨機)*
                                    </td>
                                    <td>3</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td className="sp_table_txt">D賞 側背包 20cm(全6種隨機)
                                    </td>
                                    <td>24</td>
                                    <td>24</td>
                                </tr>
                                <tr>
                                    <td className="sp_table_txt">E賞 橡膠杯墊 約10cm(全6種隨機)
                                    </td>
                                    <td>24</td>
                                    <td>17</td>
                                </tr>
                                <tr>
                                    <td className="sp_table_txt">F賞 毛巾 約60cm(全8種隨機)
                                    </td>
                                    <td>24</td>
                                    <td>20</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="row g-3 mb-4">
                            <div className="col">
                                <button className="btn btn-outline-dark py-2 w-100">
                                    抽取
                                </button>
                            </div>
                            <div className="col">
                                <button className="btn btn-dark py-2 w-100">剩餘全包</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Draw;
