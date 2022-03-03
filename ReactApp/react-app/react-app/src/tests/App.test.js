
// mount is used for rendering child component

// const { shallow } = require("enzyme")

import App from 'App';
import AccountBalance from 'components/AccountBalance';
import { ButtonComponent } from 'components/ButtonComponent';
import Counter from 'components/Counter';
import Notification from 'components/Notification';
import { shallow, mount } from 'enzyme';

const userBalance = {
    balance: 1100,
    savingsBalance: 103
}

describe("rendering components", () => {
    let appWrapper;

    beforeEach(() => {
        appWrapper = mount(<App/>)
    })

    it("renders App component without crashing", () => {
        shallow(<App/>)
    })
    it("renders App component header without crashing", () => {
       // const wrapper = shallow(<App/>)
        // console.log(wrapper.debug())
        const header = (<h1 className="has-text-centered title is-1">Welcome in the personal app</h1>);
        expect(appWrapper.contains(header)).toEqual(true);
    })
    it("render Notification component", () => {
        shallow (<Notification/>)
    })
    it("renders button", () => {
        const wrapper = mount(<AccountBalance accounts={userBalance} ></AccountBalance>)
        const label = wrapper.find('#balance-button').text()
        expect(label).toEqual('Send 100$')
    })
    it("renders Counter inside App component", () => {
        // const appWrapper = mount(<App />)
         expect(appWrapper.find("h2").text()).toContain("This is a counter app");
         expect(appWrapper.find("#increment-btn").text()).toBe('Increment');
         expect(appWrapper.find('#counter-value').text()).toBe("0");
         const counter  = appWrapper.find(Counter);
         expect(counter.exists()).toBe(true);
    })
    it("render the click event of increment button and increment counter value.", () => {
        appWrapper.find('#increment-btn').simulate('click');
        expect(appWrapper.find('#counter-value').text()).toBe("1")
    })
    it("render the click event of decrement button and decrement counter value.", () => {
        appWrapper.find('#increment-btn').simulate('click');
        expect(appWrapper.find('#counter-value').text()).toBe("1")
        appWrapper.find('#decrement-btn').simulate('click');
        expect(appWrapper.find('#counter-value').text()).toBe("0")


        const handleSubmit = jest.fn();
        const wrapper = shallow(<App/>)
        // expect(wrapper.find('#awesome')).toBeTruthy();
        // expect(wrapper.find('#clickDiv')).toBeTruthy();
        // //wrapper.find('#clickDiv').simulate('click');

        const submitBtn = wrapper.find('#buttonClick')
        
       // submitBtn.at(0).simulate('click')
        // submitBtn.props().onClick();
        // console.log(handleSubmit.mock)
        // expect(handleSubmit).toHaveBeenCalled();

        const mockCallBack = jest.fn();
        const button = shallow((<ButtonComponent onClick={mockCallBack} />))
        button.find('button').simulate('click')
        expect(mockCallBack.mock.calls.length).toEqual(1)
        expect(mockCallBack).toBeCalled();
    })
})

describe("passing props", () => {
    const accountWrapper = mount(<AccountBalance accounts={userBalance}/>)
    const notificationWrapper = mount(<Notification balance={userBalance.balance}/>)
    it("accepts user account props", () => {
        expect(accountWrapper.props().accounts).toEqual(userBalance);
    })
    it("contains savingBalance value", () => {
        const value = accountWrapper.find('.savings').text();
        const expectedValue = userBalance.savingsBalance + '$';
        expect(value).toEqual(expectedValue);
    })
    it("notification accepts props", () => {
        expect(notificationWrapper.props().balance).toEqual(userBalance.balance)
    })
})

describe("logic", () => {
    const wrapper = mount(<AccountBalance accounts = {userBalance} />)
    const notificationWrapper = mount(<Notification balance = {userBalance.balance} />)
    wrapper.find("#balance-button").simulate("click");
    it("button click - update savings", () => {
        const savingsValue = wrapper.find(".savings").text()
        const expectedValue = userBalance.savingsBalance + '$';
        expect(savingsValue).toEqual(expectedValue)

    })
    // it("button click - update", () => {
    //     const updateSavingValue = jest.fn();
    //     //const wrapper = shallow(<App/>);
    //     appWrapper.find('#buttonClick').simulate('click');
    //     console.log(updateSavingValue.mock)
    //     expect(wrapper.find('button')).toHaveLength(1);
    //     //expect(updateSavingValue).toHaveBeenCalled();a
    // })
})



