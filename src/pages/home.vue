<template>
  <div>
    <div class="app-card">
      <div class="app-full-content p-[24px] 	">
        <ul class="v-breadcrumbs h-[77px] w-full items-center theme--light flex justify-between bg-slate-100">
          <h2 class="text-[1.5rem] font-medium ml-10">DashBoard</h2>
          <div class="flex mr-10">
            <li class="">CRM/</li>
            <li>Dashboard/</li>
          </div>

        </ul>

        <div class="container">
          <div class="row row-cols-4 mt-10 h-[249px]">
            <div class="col bg-cyan-400 p-1 items-center h-[249px] w-[232px] mr-8">
              <div>
                <div class="flex">
                  <svg class="h-8 w-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="8.5" cy="7" r="4"/>
                    <line x1="20" y1="8" x2="20" y2="14"/>
                    <line x1="23" y1="11" x2="17" y2="11"/>
                  </svg>
                  <span class="font-bold text-xl ">Visitors</span>
                </div>
              </div>
              <div> biểu đồ</div>
              <div>
                <div>

                </div>
              </div>
            </div>
            <div class="col bg-green-400 h-[249px] w-[232px] mr-8">
              <div> title</div>
              <div> biểu đồ</div>
              <div>chân</div>
            </div>
            <div class="col bg-orange-400 h-[249px] w-[232px] mr-8">
              <div> title</div>
              <div> biểu đồ</div>
              <div>chân</div>
            </div>
            <div class="col bg-red-500 h-[249px] w-[232px] ">
              <div> title</div>
              <div> biểu đồ</div>
              <div>chân</div>
            </div>
          </div>
        </div>
        <div class="mt-20">
          <div>
            <h2>Project Status</h2>
            <canvas id="myChart"></canvas>
          </div>
        </div>


      </div>
    </div>

  </div>
</template>

<script>
import Chart from 'chart.js/auto';

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
      }
    });
  }
}


</script>

<style>

</style>