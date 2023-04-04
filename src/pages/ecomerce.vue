<template>
  <div>
    <div class="app-card">
      <div class="app-full-content p-[24px]">
        <ul class="v-breadcrumbs h-[77px] w-full items-center theme--light flex justify-between bg-slate-100">
          <h2 class="text-[1.5rem] font-medium ml-10">OVER VIEW</h2>
        </ul>

        <div class="grid grid-cols-3 gap-3 mt-[3vh]">
          <div class="col bg-green-400">
            <div> title</div>
            <div>
              <canvas id="myChartline2"></canvas>
            </div>
            <div>chân</div>
          </div>
          <div class="col bg-orange-400 ">
            <div> title</div>
            <div>
              <canvas id="myChartline3"></canvas>
            </div>
            <div>chân</div>
          </div>
          <div class="col bg-red-500 ">
            <div> title</div>
            <div>
              <canvas id="myChartline4"></canvas>
            </div>
            <div>chân</div>
          </div>

        </div>

        <div class="mt-[20px] grid grid-flow-row-dense grid-cols-3 ...">
          <div class="col-span-2 bg-gray-100 mr-3 ">
            <div class="m-4">
              <strong><h2 class="mr-[200vh]">Sales</h2></strong>
              <canvas id="myChart" class="mt-5"></canvas>
            </div>
          </div>
          <div>
            <div class="h-full bg-gray-100 ml-3">
              <strong><h3 class="mr-[30vh]">Devices Share</h3></strong>
              <canvas id="myChart2"></canvas>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-3 mt-[20px] mr-0 ">

          <div class="mr-[10px] bg-gray-100 ">
            <div class="flex justify-between m-3 font-bold text-[1.2rem]">
              <h4>Recent Sale</h4>
              <div>
                ...
              </div>
            </div>
            <div class="overflow-auto h-[40vh] rounded-md">
              <div class="flex justify-between mt-5 ">
                <div class="ml-3 h-full">
                  <img src="https://vuely.theironnetwork.org/static/img/icon2.png">
                </div>
                <div class="ml-3 items-left mr-[3rem] ">
                  <h5 class="font-bold text-[1rem] mr-[2rem]">Event Promo</h5>
                  <div class="flex text-[.75rem] font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
                    </svg>
                    <p class="mr-5">225 sales</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <p>280</p>
                  </div>
                  <div class="text-[.75rem] mr-[6rem]">
                    <span>View</span>
                  </div>

                </div>
                <div class=" m-3 ">
                  <strong></strong><span class="text-blue-300">$59</span>
                </div>
              </div>

              <div class="flex justify-between mt-5">
                <div class="ml-3 h-full">
                  <img src="https://vuely.theironnetwork.org/static/img/icon2.png">
                </div>
                <div class="ml-3 items-left mr-[3rem] ">
                  <h5 class="font-bold text-[1rem] mr-[2rem]">Event Promo</h5>
                  <div class="flex text-[.75rem] font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
                    </svg>
                    <p class="mr-5">225 sales</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <p>280</p>
                  </div>
                  <div class="text-[.75rem] mr-[6rem]">
                    <span>View</span>
                  </div>
                </div>
                <div class=" m-3 ">
                  <strong></strong><span class="text-blue-300">$59</span>
                </div>
              </div>

              <div class="flex justify-between mt-5">
                <div class="ml-3 h-full">
                  <img src="https://vuely.theironnetwork.org/static/img/icon2.png">
                </div>
                <div class="ml-3 items-left mr-[3rem] ">
                  <h5 class="font-bold text-[1rem] mr-[2rem]">Event Promo</h5>
                  <div class="flex text-[.75rem] font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
                    </svg>
                    <p class="mr-5">225 sales</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <p>280</p>
                  </div>
                  <div class="text-[.75rem] mr-[6rem]">
                    <span>View</span>
                  </div>
                </div>
                <div class=" m-3 ">
                  <strong></strong><span class="text-blue-300">$59</span>
                </div>
              </div>

              <div class="flex justify-between mt-5">
                <div class="ml-3 h-full">
                  <img src="https://vuely.theironnetwork.org/static/img/icon2.png">
                </div>
                <div class="ml-3 items-left mr-[3rem] ">
                  <h5 class="font-bold text-[1rem] mr-[2rem]">Event Promo</h5>
                  <div class="flex text-[.75rem] font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
                    </svg>
                    <p class="mr-5">225 sales</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <p>280</p>
                  </div>
                  <div class="text-[.75rem] mr-[6rem]">
                    <span>View</span>
                  </div>
                </div>
                <div class=" m-3 ">
                  <strong></strong><span class="text-blue-300">$59</span>
                </div>
              </div>
            </div>
            <div class="flex justify-between m-3 font-bold ">
              <div
                  class="flex justify-between mt-5 bg-cyan-400 hover:bg-gray-200 text-white w-[40%] h-[8%] rounded-full">
                <button class="ml-5"> View All</button>
              </div>
            </div>
          </div>

          <div class="mr-[10px] bg-gray-100 ">
            <div class="flex justify-between m-3 font-bold text-[1.2rem]">
              <h4>Recent Sale</h4>
              <div>
                ...
              </div>
            </div>
            <div class="overflow-auto h-[40vh] rounded-md">
              <div class="flex justify-between mt-5 ">
                <div class="ml-3 h-full">
                  <img src="https://vuely.theironnetwork.org/static/img/icon2.png">
                </div>
                <div class="ml-3 items-left mr-[3rem] ">
                  <h5 class="font-bold text-[1rem] mr-[2rem]">Event Promo</h5>
                  <div class="flex text-[.75rem] font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
                    </svg>
                    <p class="mr-5">225 sales</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <p>280</p>
                  </div>
                  <div class="text-[.75rem] mr-[6rem]">
                    <span>View</span>
                  </div>

                </div>
                <div class=" m-3 ">
                  <strong></strong><span class="text-blue-300">$59</span>
                </div>
              </div>

              <div class="flex justify-between mt-5">
                <div class="ml-3 h-full">
                  <img src="https://vuely.theironnetwork.org/static/img/icon2.png">
                </div>
                <div class="ml-3 items-left mr-[3rem] ">
                  <h5 class="font-bold text-[1rem] mr-[2rem]">Event Promo</h5>
                  <div class="flex text-[.75rem] font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
                    </svg>
                    <p class="mr-5">225 sales</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <p>280</p>
                  </div>
                  <div class="text-[.75rem] mr-[6rem]">
                    <span>View</span>
                  </div>
                </div>
                <div class=" m-3 ">
                  <strong></strong><span class="text-blue-300">$59</span>
                </div>
              </div>

              <div class="flex justify-between mt-5">
                <div class="ml-3 h-full">
                  <img src="https://vuely.theironnetwork.org/static/img/icon2.png">
                </div>
                <div class="ml-3 items-left mr-[3rem] ">
                  <h5 class="font-bold text-[1rem] mr-[2rem]">Event Promo</h5>
                  <div class="flex text-[.75rem] font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
                    </svg>
                    <p class="mr-5">225 sales</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <p>280</p>
                  </div>
                  <div class="text-[.75rem] mr-[6rem]">
                    <span>View</span>
                  </div>
                </div>
                <div class=" m-3 ">
                  <strong></strong><span class="text-blue-300">$59</span>
                </div>
              </div>

              <div class="flex justify-between mt-5">
                <div class="ml-3 h-full">
                  <img src="https://vuely.theironnetwork.org/static/img/icon2.png">
                </div>
                <div class="ml-3 items-left mr-[3rem] ">
                  <h5 class="font-bold text-[1rem] mr-[2rem]">Event Promo</h5>
                  <div class="flex text-[.75rem] font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
                    </svg>
                    <p class="mr-5">225 sales</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <p>280</p>
                  </div>
                  <div class="text-[.75rem] mr-[6rem]">
                    <span>View</span>
                  </div>
                </div>
                <div class=" m-3 ">
                  <strong></strong><span class="text-blue-300">$59</span>
                </div>
              </div>
            </div>
            <div class="flex justify-between m-3 font-bold ">
              <div
                  class="flex justify-between mt-5 bg-cyan-400 hover:bg-gray-200 text-white w-[40%] h-[8%] rounded-full">
                <button class="ml-5"> View All</button>
              </div>
            </div>
          </div>

          <div class="mr-[10px] bg-gray-100 ">
            <div class="flex justify-between m-3 font-bold text-[1.2rem]">
              <h4>Recent Sale</h4>
              <div>
                ...
              </div>
            </div>
            <div class="overflow-auto h-[40vh] rounded-md">
              <div class="flex justify-between mt-5 ">
                <div class="ml-3 h-full">
                  <img src="https://vuely.theironnetwork.org/static/img/icon2.png">
                </div>
                <div class="ml-3 items-left mr-[3rem] ">
                  <h5 class="font-bold text-[1rem] mr-[2rem]">Event Promo</h5>
                  <div class="flex text-[.75rem] font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
                    </svg>
                    <p class="mr-5">225 sales</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <p>280</p>
                  </div>
                  <div class="text-[.75rem] mr-[6rem]">
                    <span>View</span>
                  </div>

                </div>
                <div class=" m-3 ">
                  <strong></strong><span class="text-blue-300">$59</span>
                </div>
              </div>

              <div class="flex justify-between mt-5">
                <div class="ml-3 h-full">
                  <img src="https://vuely.theironnetwork.org/static/img/icon2.png">
                </div>
                <div class="ml-3 items-left mr-[3rem] ">
                  <h5 class="font-bold text-[1rem] mr-[2rem]">Event Promo</h5>
                  <div class="flex text-[.75rem] font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
                    </svg>
                    <p class="mr-5">225 sales</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <p>280</p>
                  </div>
                  <div class="text-[.75rem] mr-[6rem]">
                    <span>View</span>
                  </div>
                </div>
                <div class=" m-3 ">
                  <strong></strong><span class="text-blue-300">$59</span>
                </div>
              </div>

              <div class="flex justify-between mt-5">
                <div class="ml-3 h-full">
                  <img src="https://vuely.theironnetwork.org/static/img/icon2.png">
                </div>
                <div class="ml-3 items-left mr-[3rem] ">
                  <h5 class="font-bold text-[1rem] mr-[2rem]">Event Promo</h5>
                  <div class="flex text-[.75rem] font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
                    </svg>
                    <p class="mr-5">225 sales</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <p>280</p>
                  </div>
                  <div class="text-[.75rem] mr-[6rem]">
                    <span>View</span>
                  </div>
                </div>
                <div class=" m-3 ">
                  <strong></strong><span class="text-blue-300">$59</span>
                </div>
              </div>

              <div class="flex justify-between mt-5">
                <div class="ml-3 h-full">
                  <img src="https://vuely.theironnetwork.org/static/img/icon2.png">
                </div>
                <div class="ml-3 items-left mr-[3rem] ">
                  <h5 class="font-bold text-[1rem] mr-[2rem]">Event Promo</h5>
                  <div class="flex text-[.75rem] font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
                    </svg>
                    <p class="mr-5">225 sales</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <p>280</p>
                  </div>
                  <div class="text-[.75rem] mr-[6rem]">
                    <span>View</span>
                  </div>
                </div>
                <div class=" m-3 ">
                  <strong></strong><span class="text-blue-300">$59</span>
                </div>
              </div>
            </div>


            <div class="flex justify-between m-3 font-bold ">
              <div
                  class="flex justify-between mt-5 bg-cyan-400 hover:bg-gray-200 text-white w-[40%] h-[8%] rounded-full">
                <button class="ml-5"> + Add New</button>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2  mt-[20px]">
          <div class="...">
            <div class="flex justify-between m-3 font-bold text-[1.2rem]">
              <h4>Customer Overview</h4>
              <div>
                ...
              </div>
            </div>
            <div class="flex text-[1.2rem]">
              <div class="mr-[5rem]">
                <strong><h3>35000</h3></strong>
                <span>New Customers</span>
              </div>
              <div>
                <strong><h3>25000</h3></strong>
                <span>Returning<br> Customers</span>
              </div>
            </div>
            <div>
              <canvas id="myChartlineecomerce"></canvas>
            </div>


          </div>
          <div class="...">
            <div class="flex justify-between m-3 font-bold text-[1.2rem]">
              <h4>Invoices</h4>
              <div>
                ...
              </div>
            </div>
            <div >
              <div class="overflow-x-scroll ">
                <table class="w-full h-full ">
                  <thead>
                  <tr class="">
                    <th>#</th>
                    <th>Buyer</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Amount</th>

                  </tr>
                  </thead>
                  <tbody>
                  <tr class="m-10 mt-3 border ">
                    <td>#trn001</td>
                    <td> 19 Aug 2018</td>
                    <td>Citibank</td>
                    <td>
                  <span>
                      Saving
                  </span>
                    </td>
                    <td>$2000</td>
                  </tr>

                  <tr class="m-10 mt-3 border ">
                    <td>#trn001</td>
                    <td> 19 Aug 2018</td>
                    <td>Citibank</td>
                    <td>
                  <span>
                      Saving
                  </span>
                    </td>
                    <td>$2000</td>
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

                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="flex justify-between m-3 font-bold ">
                <div
                    class="flex justify-between mt-5 bg-cyan-400 hover:bg-gray-200 text-white w-[40%] h-[8%] rounded-full">
                  <button class="ml-5"> + Add New</button>
                </div>
              </div>

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
    const myChartlineecomerce = document.getElementById('myChartlineecomerce');
    new Chart(myChartlineecomerce, {

      type: 'line',
      data: {
        labels: ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5', 'Project 6', 'Project 7'],
        datasets: [{
          label: '# of Votes',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,

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

</style>
