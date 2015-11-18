import $ from "jquery";

var token = "ec65baa1a741affe7b9770cdd19f6c9677b38c3b";

$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});

export default $;
