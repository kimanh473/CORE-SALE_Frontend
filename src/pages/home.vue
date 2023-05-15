<template>
  <div>
    <div class="app-card">
      <div class="app-full-content p-[24px]">
        <ul class="v-breadcrumbs h-[77px] w-full items-center theme--light flex justify-between bg-slate-100">
          <h2 class="text-[1.5rem] font-medium ml-10">DashBoard</h2>
          <div class="flex mr-10">
            <li class="">CRM/</li>
            <li>Dashboard/</li>
          </div>
        </ul>

        <div class="grid grid-cols-4 gap-4 mt-[3vh]">
          <div class="col bg-cyan-400">
            <div class="flex m-3 items-center">

            </div>
            <div> <canvas id="myChartline"></canvas> </div>

          </div>
          <div class="col bg-green-400">
            <div> title</div>
            <div> <canvas id="myChartline2"></canvas></div>
            <div>chân</div>
          </div>
          <div class="col bg-orange-400 ">
            <div> title</div>
            <div> <canvas id="myChartline3"></canvas></div>
            <div>chân</div>
          </div>
          <div class="col bg-red-500 ">
            <div> title</div>
            <div> <canvas id="myChartline4"></canvas></div>
            <div>chân</div>
          </div>

        </div>

        <div class="mt-[20px] grid grid-flow-row-dense grid-cols-3 ...">
          <div class="col-span-2 bg-gray-100 mr-3 ">
            <div class="mt-20 m-4">
              <h2 class="">Project Status</h2>
              <canvas id="myChart"></canvas>
            </div>
          </div>
          <div>
            <div class="h-full bg-gray-100 ml-3">
              <h3>Sales</h3>
              <canvas id="myChart2"></canvas>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-3 mt-[20px] mr-0 ">

          <div class="mr-[10px] bg-gray-100 ">
            <div class="flex justify-between m-3 font-bold text-[1.2rem]">
              <h3>UpComming Event </h3>
              <div>
                ...
              </div>
            </div>

            <div class="flex justify-between">
              <div class="m-3">
                <h5 class="font-bold text-[1.2rem]">Marketing Seminar</h5>
                <p>28th April, Mumbai</p>
              </div>
              <div class="bg-amber-200 m-3">
                <span>Email</span>
              </div>
            </div>

            <div class="flex justify-between border">
              <div class="m-3">
                <h5 class="font-bold text-[1.2rem]">Strategy Planning</h5>
                <p>28th April, Mumbai</p>
              </div>
              <div class="bg-amber-200 m-3">
                <span>Phone</span>
              </div>
            </div>

            <div class="flex justify-between border">
              <div class="m-3">
                <h5 class="font-bold text-[1.2rem]">Hiring Personals</h5>
                <p>28th April, Mumbai</p>
              </div>
              <div class="bg-amber-200 m-3">
                <span>Skype</span>
              </div>
            </div>

            <div class="flex justify-between ">
              <div class="m-3">
                <h5 class="font-bold text-[1.2rem]">Training</h5>
                <p>28th April, Mumbai</p>
              </div>
              <div class="bg-amber-100 m-3">
                <span>Email</span>
              </div>
            </div>
          </div>

          <div class="mr-[10px] bg-gray-100 ">
            <div class="flex justify-between m-3 font-bold text-[1.2rem]">
              <h3>Ongoing Projects</h3>
              <div>
                ...
              </div>
            </div>

            <div class="flex justify-between">
              <div class="m-3">
                <h5 class="font-bold text-[1.2rem]">Project 1</h5>
              </div>
            </div>

            <div class="justify-between">

              <div class="flex justify-start m-[20px] m-3 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
                </svg>
                <h5 class="font-bold text-[1.2rem]"> Supervisor : </h5>
                <p class="">John Gena</p>
              </div>

              <div class="m-3 flex justify-start m-[20px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
                </svg>
                <h5 class="font-bold text-[1.2rem]"> Duration : </h5>
                <p>3 Weeks</p>
              </div>

              <div class="m-3 flex justify-start m-[20px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                </svg>

                <h5 class="font-bold text-[1.2rem]"> Net Worth : </h5>
                <p>$2364378</p>
              </div>

              <div class="m-3 flex justify-start m-[20px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                </svg>

                <h5 class="font-bold text-[1.2rem]"> Email : </h5>
                <p>support@theironnetwork.org</p>
              </div>

              <div class="m-3 flex justify-start m-[20px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                </svg>
                <h5 class="font-bold text-[1.2rem]"> Phone : </h5>
                <p>+01 3456 25378</p>
              </div>

              <div class="flex justify-between ">
                <div class="m-3">
                  <h5 class="font-bold text-[1.2rem]">
                    <span class="fw-bold">Progress :</span>
                    <div class="ease-linear"></div>
                  </h5>
                </div>
              </div>

            </div>

          </div>

          <div class="mr-[10px] bg-gray-100 ">
            <div class="flex justify-between m-3 font-bold text-[1.2rem]">
              <h3>UpComming Event </h3>
              <div>
                ...
              </div>
            </div>

            <div class="flex justify-between">
              <div class="m-3">
                <h5 class="font-bold text-[1.2rem]">Marketing Seminar</h5>
                <p>28th April, Mumbai</p>
              </div>
              <div class="bg-amber-200 m-3">
                <span>Email</span>
              </div>
            </div>

            <div class="flex justify-between border">
              <div class="m-3">
                <h5 class="font-bold text-[1.2rem]">Strategy Planning</h5>
                <p>28th April, Mumbai</p>
              </div>
              <div class="bg-amber-200 m-3">
                <span>Phone</span>
              </div>
            </div>

            <div class="flex justify-between border">
              <div class="m-3">
                <h5 class="font-bold text-[1.2rem]">Hiring Personals</h5>
                <p>28th April, Mumbai</p>
              </div>
              <div class="bg-amber-200 m-3">
                <span>Skype</span>
              </div>
            </div>

            <div class="flex justify-between ">
              <div class="m-3">
                <h5 class="font-bold text-[1.2rem]">Training</h5>
                <p>28th April, Mumbai</p>
              </div>
              <div class="bg-amber-100 m-3">
                <span>Email</span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-[20px] grid grid-cols-3 gap-4">

          <div class="bg-gray-100 ...">
            <div class="flex justify-between">
              <div class="justify-between m-3 font-bold text-[1.2rem]">
                <h3>Notifications</h3>
              </div>
              <div class="mr-3 ">
                ...
              </div>
            </div>
            <div class="grid grid-cols-1 gap-1 text-[1.2rem]">
              <div>
                <div class=" border bg-blue-400 rounded-[15px] m-2 items-center ">
                  <p class="m-3 text-left">
                    Site goes is down for 6 hours<br>
                    due to maintainance and bug fixing.Please Check
                  </p>
                </div>
              </div>
              <div>
                <div class=" border bg-cyan-400 rounded-[15px] m-2 border">
                  <p class="m-3 text-left">
                    New users from March is <br>
                    promoted as special benefit under promotional offer of 30%.
                  </p>
                </div>
              </div>
              <div>
                <div class=" border bg-red-400 rounded-[15px] m-2 ">
                  <p class="m-3 text-left">
                    Bug detected from the<br> development team at the cart module of Fashion store.
                  </p>
                </div>
              </div>
            </div>
            <div class="divide-y divide-slate-200 ...">

              <div class="mt-4 ">
                <div class=" border rounded-[15px] m-2 border ">
                  <button class="m-3 text-left text-[1.2rem] font-medium hover:bg-gray-400 ...">
                    <span class="border">View All Notifications</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

          <div class="col-span-2 bg-gray-100 mr-2 overflow-y-auto h-[80vh]">

            <div class="flex justify-between">
              <div class="m-3 font-bold text-[1.2rem]">
                <h3>Chat</h3>
              </div>
              <div class="mr-3 ">
                ...
              </div>
            </div>

            <div class="">
              <div class="flex mt-5">
                <div class="rounded-full w-[40px] h-[40px] mt-2">
                  <img src="https://vuely.theironnetwork.org/static/avatars/user-14.jpg" alt="">
                </div>
                <div class="text-left">
                    <span class="ml-3">
                      Max Wells
                    </span>
                  <div class=" border bg-cyan-200 rounded-[15px] m-2 ">
                    <p class="m-2 text-left text-[1.2rem]">
                      Bug detected from the development<br> team at the cart module of Fashion store.
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex mt-3 ml-[300px]">
                <div class="text-left">
                  <span class="ml-3 ml-[19rem]">
                    Max Wells
                  </span>
                  <div class=" border bg-amber-100 rounded-[15px] m-2 ">
                    <p class="m-2 text-left text-[1.2rem]">
                      Bug detected from the development<br> team at the cart module of Fashion store.
                    </p>
                  </div>
                </div>
                <div class="rounded-full w-[40px] h-[40px] mt-2">
                  <img src="https://vuely.theironnetwork.org/static/avatars/user-14.jpg" alt="">
                </div>

              </div>

              <div class="flex mt-3">
                <div class="rounded-full w-[40px] h-[40px] mt-2">
                  <img src="https://vuely.theironnetwork.org/static/avatars/user-14.jpg" alt="">
                </div>
                <div class="text-left">
                    <span class="ml-3">
                      Max Wells
                    </span>
                  <div class=" border bg-cyan-200 rounded-[15px] m-2 ">
                    <p class="m-2 text-left text-[1.2rem]">
                      Bug detected from the development<br> team at the cart module of Fashion store.
                    </p>
                  </div>
                </div>
              </div>

              <div class="flex mt-3 ml-[300px]">
                <div class="text-left">
                  <span class="ml-3 ml-[19rem]">
                    Max Wells
                  </span>
                  <div class=" border bg-amber-100 rounded-[15px] m-2 ">
                    <p class="m-2 text-left text-[1.2rem]">
                      Bug detected from the development<br> team at the cart module of Fashion store.
                    </p>
                  </div>
                </div>
                <div class="rounded-full w-[40px] h-[40px] mt-2">
                  <img src="https://vuely.theironnetwork.org/static/avatars/user-14.jpg" alt="">
                </div>
              </div>

              <!--              <div class="flex mt-3">-->
              <!--                <div class="rounded-full w-[40px] h-[40px] mt-2">-->
              <!--                  <img src="https://vuely.theironnetwork.org/static/avatars/user-14.jpg" alt="">-->
              <!--                </div>-->
              <!--                <div class="text-left">-->
              <!--                    <span class="ml-3">-->
              <!--                      Max Wells-->
              <!--                    </span>-->
              <!--                  <div class=" border bg-cyan-200 rounded-[15px] m-2 ">-->
              <!--                    <p class="m-2 text-left text-[1.2rem]">-->
              <!--                      Bug detected from the development<br> team at the cart module of Fashion store.-->
              <!--                    </p>-->
              <!--                  </div>-->
              <!--                </div>-->
              <!--              </div>-->

              <!--              <div class="flex mt-3 ml-[300px]">-->
              <!--                <div class="text-left">-->
              <!--                  <span class="ml-3 ml-[19rem]">-->
              <!--                    Max Wells-->
              <!--                  </span>-->
              <!--                  <div class=" border bg-amber-100 rounded-[15px] m-2 ">-->
              <!--                    <p class="m-2 text-left text-[1.2rem]">-->
              <!--                      Bug detected from the development<br> team at the cart module of Fashion store.-->
              <!--                    </p>-->
              <!--                  </div>-->
              <!--                </div>-->
              <!--                <div class="rounded-full w-[40px] h-[40px] mt-2">-->
              <!--                  <img src="https://vuely.theironnetwork.org/static/avatars/user-14.jpg" alt="">-->
              <!--                </div>-->
              <!--              </div>-->
            </div>

          </div>

        </div>

        <div class="grid grid-cols-6 gap-4">

          <div class="h-full mt-[20px] col-start-1 col-end-7 bg-gray-100 ...">
            <div class=" ">
              <div class="flex text-left m-3 h-full bg-white font-medium text-[1.2rem]">
                <div class=" hover:bg-cyan-400 mr-5">

                  <button>
                    Transaction List
                  </button>
                </div>
                <div class=" hover:bg-cyan-400 mr-5"> Transfer Report</div>
                <div class=" hover:bg-cyan-400"> Expense Category</div>
              </div>
            </div>
            <table class="w-full h-full">
              <thead>
              <tr class="">
                <th>Transaction Id</th>
                <th>Date</th>
                <th>Account</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Debit</th>
                <th>Credit</th>
                <th>Balance</th>
              </tr>
              </thead>
              <tbody>
              <tr class="m-10 mt-3 border">
                <td>#trn001</td>
                <td> 19 Aug 2018</td>
                <td>Citibank</td>
                <td>
                  <span>
                      Saving
                  </span>
                </td>
                <td>$2000</td>
                <td>$1,807.00</td>
                <td>$0.00</td>
                <td>$0.00</td>
              </tr>

              <tr class="m-10 mt-3 border">
                <td>#trn001</td>
                <td> 19 Aug 2018</td>
                <td>Citibank</td>
                <td>
                  <span>
                      Saving
                  </span>
                </td>
                <td>$2000</td>
                <td>$1,807.00</td>
                <td>$0.00</td>
                <td>$0.00</td>
              </tr>

              <tr class="m-10 mt-3 border">
                <td>#trn001</td>
                <td> 19 Aug 2018</td>
                <td>Citibank</td>
                <td>
                  <span>
                      Saving
                  </span>
                </td>
                <td>$2000</td>
                <td>$1,807.00</td>
                <td>$0.00</td>
                <td>$0.00</td>
              </tr>

              <tr class="m-10 mt-3 border">
                <td>#trn001</td>
                <td> 19 Aug 2018</td>
                <td>Citibank</td>
                <td>
                  <span>
                      Saving
                  </span>
                </td>
                <td>$2000</td>
                <td>$1,807.00</td>
                <td>$0.00</td>
                <td>$0.00</td>
              </tr>

              <tr class="m-10 mt-3 border">
                <td>#trn001</td>
                <td> 19 Aug 2018</td>
                <td>Citibank</td>
                <td>
                  <span>
                      Saving
                  </span>
                </td>
                <td>$2000</td>
                <td>$1,807.00</td>
                <td>$0.00</td>
                <td>$0.00</td>
              </tr>

              <tr class="m-10 mt-3 border">
                <td>#trn001</td>
                <td> 19 Aug 2018</td>
                <td>Citibank</td>
                <td>
                  <span>
                      Saving
                  </span>
                </td>
                <td>$2000</td>
                <td>$1,807.00</td>
                <td>$0.00</td>
                <td>$0.00</td>
              </tr>

              <tr class="m-10 mt-3 border">
                <td>#trn001</td>
                <td> 19 Aug 2018</td>
                <td>Citibank</td>
                <td>
                  <span>
                      Saving
                  </span>
                </td>
                <td>$2000</td>
                <td>$1,807.00</td>
                <td>$0.00</td>
                <td>$0.00</td>
              </tr>
              </tbody>
            </table>


            <!--              <div class="grid grid-cols-8 gap-8 font-medium">-->
            <!--                <div>Transaction Id</div>-->
            <!--                <div>Date</div>-->
            <!--                <div>Account</div>-->
            <!--                <div>Type</div>-->
            <!--                <div>Amount</div>-->
            <!--                <div>Debit</div>-->
            <!--                <div>Credit</div>-->
            <!--                <div>Balance</div>-->
            <!--              </div>-->

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Chart from 'chart.js/auto';
// import { Progress } from 'antd';
export default {
  name: 'home',
  props: {
    msg: String
  },
  mounted() {
    console.log('Component mount')
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Project 1', 'Project 2', 'Project 3', 'Project 4'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    });
    const ctx2 = document.getElementById('myChart2');
    new Chart(ctx2, {
      type: 'pie',
      data: {
        labels: ['Project A', 'Project B', 'Project C', 'Project 2'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    });

    const ctx3 = document.getElementById('myChartline');
    new Chart(ctx3, {
      type: 'line',
      data: {
        labels: ['A', ' B', ' C', ' D' , 'E'],
        datasets: [{
          label: 'Visitors',
          data: [30, 41, 26, 10, 30],
          borderWidth: 3,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    });
    const ctx4 = document.getElementById('myChartline2');
    new Chart(ctx4, {
      type: 'line',
      data: {
        labels: ['A', ' B', ' C', ' D' , 'E'],
        datasets: [{
          label: 'Visitors',
          data: [30, 41, 26, 10, 30],
          borderWidth: 3,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    });
    const ctx5 = document.getElementById('myChartline3');
    new Chart(ctx5, {
      type: 'line',
      data: {
        labels: ['A', ' B', ' C', ' D' , 'E'],
        datasets: [{
          label: 'Visitors',
          data: [30, 41, 26, 10, 30],
          borderWidth: 3,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    });
    const ctx6 = document.getElementById('myChartline4');
    new Chart(ctx6, {
      type: 'line',
      data: {
        labels: ['A', ' B', ' C', ' D' , 'E'],
        datasets: [{
          label: 'Visitors',
          data: [30, 41, 26, 10, 30],
          borderWidth: 3,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    });
  }

}


</script>

<style>
html {
  font-family: 'Montserrat', sans-serif;
}
</style>
