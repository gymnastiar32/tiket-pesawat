export default function LayoutCard({ title, children }) {
    return (
        <main className="bg-image min-h-[100vh] p-24">
            <div className="w-[80%] mx-auto z-10 mt-[60px]">
                <h1 className="text-white text-center text-[40px] mb-5 z-10">{title}</h1>
                <div className="w-full rounded-xl shadow-lg bg-white p-6">
                    <div className="grid grid-cols-12 gap-6">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}