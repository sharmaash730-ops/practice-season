export default async function SlowComponent3s() {
    const response = await fetch("https://procodrr.vercel.app/?sleep=4000");
    const data = await response.json();
    return <div>{JSON.stringify(data)}</div>;

} 