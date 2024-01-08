export const POST = async (
  url: string,
  body: any,
  headers = {},
  ...rest: any
) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      ...rest,
    });

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.log("error in POST call", error.message);
    return { success: false, message: error.message };
  }
};
