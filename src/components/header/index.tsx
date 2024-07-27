export function Header() {
  return (
    <header className="w-full shadow-lg py-5">
        <div className="mx-auto max-w-[1200px] max-lg:mx-5 flex items-center justify-between">
          <h1>
            Algoritmo CYK
          </h1>
          <div className="flex gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://github.com/navestelar.png"
              className="h-10 w-10 rounded-full"
              alt=""
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://github.com/yohanesz.png"
              className="h-10 w-10 rounded-full"
              alt=""
            />
        </div>
      </div>
      </header>
  )
}