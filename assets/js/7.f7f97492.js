(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{359:function(e,t,a){"use strict";a.r(t);var r=a(11),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[e._v("#")]),e._v(" Dockerfile")]),e._v(" "),a("h2",{attrs:{id:"entrypoint-vs-cmd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint-vs-cmd"}},[e._v("#")]),e._v(" ENTRYPOINT vs CMD")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th"),e._v(" "),a("th",[e._v("No ENTRYPOINT")]),e._v(" "),a("th",[e._v("ENTRYPOINT exec_entry p1_entry")]),e._v(" "),a("th",[e._v("ENTRYPOINT [“exec_entry”, “p1_entry”]")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("No CMD")]),e._v(" "),a("td",[e._v("error, not allowed")]),e._v(" "),a("td",[e._v("/bin/sh -c exec_entry p1_entry")]),e._v(" "),a("td",[e._v("exec_entry p1_entry")])]),e._v(" "),a("tr",[a("td",[e._v("CMD [“exec_cmd”, “p1_cmd”]")]),e._v(" "),a("td",[e._v("exec_cmd p1_cmd")]),e._v(" "),a("td",[e._v("/bin/sh -c exec_entry p1_entry")]),e._v(" "),a("td",[e._v("exec_entry p1_entry exec_cmd p1_cmd")])]),e._v(" "),a("tr",[a("td",[e._v("CMD [“p1_cmd”, “p2_cmd”]")]),e._v(" "),a("td",[e._v("p1_cmd p2_cmd")]),e._v(" "),a("td",[e._v("/bin/sh -c exec_entry p1_entry")]),e._v(" "),a("td",[e._v("exec_entry p1_entry p1_cmd p2_cmd")])]),e._v(" "),a("tr",[a("td",[e._v("CMD exec_cmd p1_cmd")]),e._v(" "),a("td",[e._v("/bin/sh -c exec_cmd p1_cmd")]),e._v(" "),a("td",[e._v("/bin/sh -c exec_entry p1_entry")]),e._v(" "),a("td",[e._v("exec_entry p1_entry /bin/sh -c exec_cmd p1_cmd")])])])]),e._v(" "),a("h2",{attrs:{id:"entrypoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint"}},[e._v("#")]),e._v(" ENTRYPOINT")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("exec")]),e._v(" "),a("p",[a("code",[e._v('ENTRYPOINT ["executable", "param1", "param2"]')])]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('FROM ubuntu\nENTRYPOINT ["top", "-b"]\nCMD ["-c"]\n')])])]),a("p",[e._v("Run:\nCommand line arguments to docker run "),a("image",[e._v(" will be appended after all elements in an exec form ENTRYPOINT, and will override all elements specified using CMD")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker run -it --rm --name test  top -H\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("top -b -H\n")])])])]),e._v(" "),a("li",[a("p",[e._v("shell")]),e._v(" "),a("p",[a("code",[e._v("ENTRYPOINT command param1 param2")])])])]),e._v(" "),a("h2",{attrs:{id:"cmd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmd"}},[e._v("#")]),e._v(" CMD")]),e._v(" "),a("p",[e._v("CMD commands are ignored by Daemon when there are parameters stated within the docker run command")]),e._v(" "),a("h2",{attrs:{id:"env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[e._v("#")]),e._v(" ENV")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("ENV")]),e._v(" instruction sets the environment variable to the value. The environment variables set using "),a("code",[e._v("ENV")]),e._v(" will persist when a container is run from the resulting image.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# to override")]),e._v("\ndocker run -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("xx")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("yy\n")])])]),a("h2",{attrs:{id:"arg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arg"}},[e._v("#")]),e._v(" ARG")]),e._v(" "),a("p",[e._v("They are only available from the moment they are ‘announced’ in the Dockerfile with an ARG instruction up to the moment when the image is built. Running containers can’t access values of ARG variables.")]),e._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ARG")]),e._v(" some_variable_name\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or with a hard-coded default:")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#ARG some_variable_name=default_value")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ${xx:-yy}")]),e._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker build --build-arg "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("some_variable_name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("a_value\n")])])]),a("h2",{attrs:{id:"dockerignore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerignore"}},[e._v("#")]),e._v(" .dockerignore")]),e._v(" "),a("p",[a("code",[e._v("DOCKER_BUILDKIT=1 docker ...")]),e._v(": as long as "),a("strong",[e._v(".dockerignore")]),e._v(" is in the same directory of "),a("strong",[e._v("Dockerfile")]),e._v(", it will be processed.")])])}),[],!1,null,null,null);t.default=s.exports}}]);