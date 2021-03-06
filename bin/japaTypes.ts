import "@japa/runner";

declare module "@japa/runner" {
  interface TestContext {
    getTime(): number;
    nodeVersion(): string;
  }

  interface Test<TestData> {
    // notify TypeScript about custom test properties
  }
}
