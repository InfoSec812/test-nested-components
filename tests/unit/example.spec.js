import { mount, createLocalVue } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import Quasar, * as All from 'quasar';

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const localVue = createLocalVue();
    localVue.use(Quasar, {
      components: All
    });
    const wrapper = mount(HelloWorld, {
      localVue
    });
    const fedInput = wrapper.find({ ref: 'from_app_queue' });
    expect(fedInput.vm.$attrs['float-label']).toBe('From App Queue');
  });
});
