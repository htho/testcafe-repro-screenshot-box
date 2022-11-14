fixture("screenshot")
	.page("http://localhost:3000/")

test("takeElementScreenshot", async (t) => {
    await t.takeElementScreenshot("#text");
});
test("takeScreenshot", async (t) => {
    await t.takeScreenshot();
});