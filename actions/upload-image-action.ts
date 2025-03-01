"use server"

export async function uploadImage(formData: FormData) : Promise<string[]> {
    const url = `${process.env.API_URL}/products/upload-image`;
    const req =  await fetch(url, { method: 'POST', body: formData });
    const data = await req.json();

    const urls = data.map((item: any) => item.secure_url);
    return urls;
}