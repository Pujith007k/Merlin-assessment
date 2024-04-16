import {PureComponent} from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, } from 'recharts';
import {Chrono} from 'react-chrono'

import './index.css'

const data = [
    {
        name: 'Week 1',
        User: 4000,
        Guest: 2400,
        amt: 2400,
      },
      {
        name: 'Week 2',
        User: 3000,
        Guest: 1398,
        amt: 2210,
      },
      {
        name: 'Week 3',
        User: 2000,
        Guest: 9800,
        amt: 2290,
      },
      {
        name: 'Week 4',
        User: 2780,
        Guest: 3908,
        amt: 2000,
      },
      {
        name: 'Week 5',
        User: 1890,
        Guest: 4800,
        amt: 2181,
      },
      {
        name: 'Week 6',
        User: 2390,
        Guest: 3800,
        amt: 2500,
      },
      {
        name: 'Week 7',
        User: 3490,
        Guest: 4300,
        amt: 2100,
      },]
const pieChartData = [
        {
          count: 809680,
          language: "Telugu",
        },
        {
          count: 4555697,
          language: "Hindi",
        },
        {
          count: 12345657,
          language: "English",
        },
      ]
      

class Dashboard extends PureComponent{
    render(){
        return(
            <div className="MainContainer">
                <div className="sideBarContainer">
                    <h1 className="siderBarHeading">Board.</h1>
                    <div className="AppElements">
                        <div className="pageElements">
                            <div className="IconContainer">
                                <img className="Image" src="https://res.cloudinary.com/dbvonytlq/image/upload/v1713238279/dashboard_icon_1x_rwi4jq.png" alt="image" />
                                <p className="ImageparagraphDash">Dashboard</p>
                            </div>
                            <div className="IconContainer">
                                <img className="Image" src="https://res.cloudinary.com/dbvonytlq/image/upload/v1713238462/transaction_1px_rzreqg.png" alt="image" />
                                <p className="Imageparagraph">Transaction</p>
                            </div>
                            <div className="IconContainer">
                                <img className="Image" src="https://res.cloudinary.com/dbvonytlq/image/upload/v1713238602/schedules_1px_o2zkz7.png" alt="image" />
                                <p className="Imageparagraph">Schedules</p>
                            </div>
                            <div className="IconContainer">
                                <img className="Image" src="https://res.cloudinary.com/dbvonytlq/image/upload/v1713238836/users_1x_yejebg.png"  alt="image"/>
                                <p className="Imageparagraph">Users</p>
                            </div>
                            <div className="IconContainer">
                                <img className="Image" src="https://res.cloudinary.com/dbvonytlq/image/upload/v1713238894/setting_icon_1x_xfbaye.png"  alt="image" />
                                <p className="Imageparagraph">Settings</p>
                            </div>
                        </div>
                        <div className="bottom">
                            <p className="help">Help</p>
                            <p className="contactUs">Contact Us</p>
                        </div>
                    </div>
                </div>
                <div className="dashBoardContainer">
                    <div className="topHeader">
                        <h1 className="headerName">DashBoard</h1>
                        <div className="profileContainer">
                            <input className="searchBar" type="search" placeholder="search..."/>
                            <img className="bellIcon" src="https://res.cloudinary.com/dbvonytlq/image/upload/v1713241760/Vector_bell_idjhhe.png"/>
                            <img className="profileIcon" src="https://res.cloudinary.com/dbvonytlq/image/upload/v1713242364/image_1_profile_ymtkno.png"/>
                        </div>
                    </div>
                    <div className="sectionContainer">
                        <div className="totalRevenues">
                            <img className="revenueIcon" src="https://res.cloudinary.com/dbvonytlq/image/upload/v1713245627/Vector_revenue_g1t2m6.png"/>
                            <p className="totalparagraph">Total Revenues</p>
                            <h1 className="number">$2,129,430</h1>
                        </div>
                        <div className="totalTransactions">
                            <img className="revenueIcon" src="https://res.cloudinary.com/dbvonytlq/image/upload/v1713246639/Vector_transactions_dy3fig.png"/>
                            <p className="totalparagraph">Total Transactions</p>
                            <h1 className="number">1,520</h1>
                        </div>
                        <div className="totalLikes">
                            <img className="revenueIcon" src="https://res.cloudinary.com/dbvonytlq/image/upload/v1713246912/Vector_like_uetuzn.png"/>
                            <p className="totalparagraph">Total Likes</p>
                            <h1 className="number">9,721</h1>
                        </div>
                        <div className="totalUsers">
                            <img className="revenueIcon" src="https://res.cloudinary.com/dbvonytlq/image/upload/v1713247010/Vector_user_ckujhx.png"/>
                            <p className="totalparagraph">Total Users</p>
                            <h1 className="number">892</h1>
                        </div>
                    </div>
                    <div className="rechartContainer">
                        <h4 className="rechartHeading">Activites</h4>
                        <p className="rechartHeading">May-June 2021</p>
                        <LineChart
                            width={1000}
                            height={250}
                            data={data}
                            margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line  type="monotone" dataKey="Guest" stroke="#E9A0A0" activeDot={{ r: 8 }} />
                            <Line  type="monotone" dataKey="User" stroke="#9BDD7C" />
                        </LineChart>
      
                    </div>
                    <div className="twochartsContainer">
                    <div className="pieChartContainer">
                        <h4 className="rechartHeading">Top Products</h4>
                        <p className="rechartHeading">May-June 2021</p>
                        <ResponsiveContainer width={600} height={300}>
                            <PieChart>
                                <Pie
                                cx="70%"
                                cy="40%"
                                data={pieChartData}
                                startAngle={0}
                                endAngle={360}
                                innerRadius="0%"
                                outerRadius="70%"
                                dataKey="count"
                            >
                                    <Cell name="Basic Tees" fill="#fecba6" />
                                    <Cell name="Custom Short Pants" fill="#b3d23f" />
                                    <Cell name="Super Hoodies" fill="#a44c9e" />
                                </Pie>
                                    <Legend
                                    iconType="circle"
                                    layout="vertical"
                                    verticalAlign="middle"
                                    align="right"
                                />

                            </PieChart>
                        </ResponsiveContainer>

                    </div>
                    <div className="chronoContainer">
                        <div className="chrono-container">
                            <Chrono mode="VERTICAL"  disableNavOnKey theme={{primary: 'red',secondary: 'blue',}}>
                                <div>
                                    <h5>Meeting with suppliers from Kuta Bali</h5>
                                    <p>14.00-15.00</p>
                                    <p>at Sunset Road,Kuta,Bali</p>
        
                                </div>
                                <div>
                                    <h5>Check operation at Giga Factory 1</h5>
                                    <p>18.00-20.00</p>
                                    <p>at Central Jakarta</p>
                                </div>
                            </Chrono>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        )
    }

}
export default Dashboard