import React from "react";
import CreatePost from "./CreatePost";
import { shallow } from "enzyme";
import postService from '../../services/post-service';

it("renders create post component", () => {
  const wrapper = shallow(<CreatePost />);
  expect(wrapper).toBeTruthy();
});

it("checks for html changes", () => {
  const wrapper = shallow(<CreatePost />);
  expect(wrapper).toMatchSnapshot();
});

it("creates post successfully", (done) => {
  const history = { push: () => {} };
  const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: { value: 123 } });
  const historyPushSpy = jest.spyOn(history, 'push');
  const createPostSpy = jest.spyOn(postService, 'create').mockImplementationOnce(() => Promise.resolve());;

  const wrapper = shallow(<CreatePost history={history}/>);
  wrapper.find('button').simulate('click');

  expect(useRefSpy).toHaveBeenCalledTimes(1);
  expect(createPostSpy).toHaveBeenCalledTimes(1);
  expect(createPostSpy).toHaveBeenCalledWith({ description: 123 });
  Promise.resolve().then(() => {
    expect(historyPushSpy).toHaveBeenCalledTimes(1);
    done();
    useRefSpy.mockClear();
  });
});