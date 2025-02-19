import React from 'react'

const Chinese = () => {
  return (
    <main className='bg-chinese'>
      <section className='text-white p-14 pt-36 gap-5 grid grid-cols-2 place-items-center'>
          <div>
            <h4 className=' text-lg font-semibold'>白天编码，晚上调试梦想——我是 Ayush，但你可以叫我 AKD。我是来自印度的信息技术专业一年级研究生:) 我在协作混乱中茁壮成长。
              在构建了从模因生成器到喜怒无常的天气应用程序的所有内容之后，我了解到最好的代码诞生于笑声、咖啡因和偶尔的生存危机。</h4>
          </div>

          <div className='pt-16'>
            <h2 className='text-gray-300 text-3xl font-extrabold'>技能？假设我精通：</h2>
            <ul className='pt-2 max-w-md space-y-1 list-disc list-inside text-lg font-semibold'>
              <li>框架：React、Svelte</li>
              <li>语言：JavaScript、Python、C++</li>
            </ul>

            <div>
                <h2 className='text-gray-300 pt-10 text-3xl font-extrabold'>当我不忙着把咖啡变成代码时，你会找到我</h2>
                <ul className='pt-4 max-w-md space-y-1 list-disc list-inside text-lg font-semibold'>
                  <li> 速通人生的支线任务——无论是完成任务、英勇作战还是 解魔方 </li>
                  <li>踢足球、羽毛球或水下橄榄球（这方面完全是菜鸟）</li>
                </ul>
            </div>

            <div className=" mt-10 flex space-x-12">
      {/* Instagram Icon */}
      <a href="https://www.instagram.com/ayushk249/?igsh=dTRlcnk3aHNsYWM%3D#" target="_blank" rel="noopener noreferrer">
        <svg
          className="w-10 h-10 text-white hover:text-gray-300"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9A3.5 3.5 0 0 0 20 16.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6zM17.8 6a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" />
        </svg>
      </a>

      {/* LinkedIn Icon */}
      <a href="https://www.linkedin.com/in/ayush-kumar-das/" target="_blank" rel="noopener noreferrer">
        <svg
          className="w-10 h-10 text-white hover:text-gray-300"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zM4.943 12.248V6.169H2.542v6.079h2.401zm-1.2-7.079c.837 0 1.358-.554 1.358-1.248C5.086 3.226 4.581 2.687 3.758 2.687c-.822 0-1.327.539-1.327 1.248 0 .694.521 1.248 1.327 1.248zm4.908 7.079V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 6.079 0 6.079h2.4z"/>
        </svg>
      </a>
    </div>
          </div>
      </section>
    </main>
  )
}

export default Chinese