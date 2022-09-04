export const Loading = () => {

    return <div className="flex flex-col justify-center items-center w-full h-80 space-y-10">
        <div class="animate-spin radial-progress" style={{
            '--value': "60", "--size": "9rem", "--thickness": "2px"
        }}></div>
        <span>Loading</span>
    </div>
    
}