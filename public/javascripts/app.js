$ (function () {
    /**
     * Event handler for edit button (pencil)
     * Select previous textfield that has todo description
     * Set textfield to opposite of its current state readonly/write
     * Set cursor to end of line of on edit mode
     */
    $ ('span[name="editTodo"]').on ('click', evt => {
        // Select previous input field
        const prev = $ (evt.currentTarget).prev ('input.entry_label');
        // Returns a boolean of the readonly state of the input
        const ro = prev.prop ('readonly');
        // Set all other inputs to readonly
        $ ('input.entry_label').prop ('readonly', true);
        // Set previous input to the opposite of it's previous state
        // A trick to set the cursor at the end of the line. UX!!
        const oldDesc = prev.val ();
        prev.prop ('readonly', !ro).focus ().val ('').val (oldDesc);
    });
    /**
     * Event handler for submit buttons
     */
    $ ('button[type="submit"]').click (evt => {
        // Make sure event does not propagate
        evt.stopPropagation ();
    });

    $ ('form[action="/today"]').on ('submit', () => {
        const input = $ ('input.new_entry_input');
        if ($ (input).val () === '') {
            $ (input).addClass ('empty');
        }
        setTimeout (() => {
            $ (input).removeClass ('empty');
        }, 300);
    });

    // Submit the avatar form automatically once the file is selected
    $ ('#avatarInput').change (() => {
        $ ('#avatarForm').submit ();
    });

    const placeHolder = $ ('div.empty_entry_label');
    const emptyLabel = $ ('span.addTodo_placeholder');
    const addBtnPlaceholder = $ ('i.addTodo_placeholder');

    const newTodo = $ ('input.new_entry_input');
    const addBtn = $ ('button.new_entry_btn');

    newTodo.submit (() => {
        $ (this).css ('display', 'none');
        addBtn.css ('display', 'none');
    });

    // Capture 'Tab' keypress to display new todo entry
    $ (document).on ('keydown', evt => {
        const keyCode = evt.keyCode || evt.which;
        if (keyCode === 9) {
            addBtn.css ('display', 'block');
            newTodo.css ('display', 'block').focus ();
        }
    });

    $ (document).click (evt => {
        const target = $ (evt.target);
        // Show the input field if user clicks on placeholder and its children or the field itself
        if (target.is (placeHolder)
            || target.is (emptyLabel)
            || target.is (addBtnPlaceholder)
            || target.is (newTodo)) {
            addBtn.css ('display', 'block');
            newTodo.css ('display', 'block').focus ();
        } else {
            newTodo.val ('').css ('display', 'none');
            addBtn.css ('display', 'none');
        }
        if (!target.is ($ ('span[name="editTodo"] > i.fa-pencil-alt'))) {
            // Set all other inputs to readonly
            $ ('input.entry_label').prop ('readonly', true);
        }
    });

    /** ========================
     *  API Testing
     *
     */

    const baseURL = 'https://a5.ramarolahy.website';

    /**\
     * Method to make API call
     * @param method
     * @param uri
     * @param params
     * @param body
     * @returns {Promise<string|Promise<any>>}
     */
    async function callAPI(method, uri, params, body) {
        const jsonMimeType = {
            'Content-type': 'application/json'
        };
        try {
            /*  Set up our fetch.
             *   'body' to be included only when method is POST
             *   If 'PUT', we need to be sure the mimetype is set to json
             *      (so bodyparser.json() will deal with it) and the body
             *      will need to be stringified.
             *   '...' syntax is the ES6 spread operator.
             *      It assigns new properties to an object, and in this case
             *      lets us use a conditional to create, or not create, a property
             *      on the object. (an empty 'body' property will cause an error
             *      on a GET request!)
             */
            const response = await fetch (baseURL + uri, {
                method: method, // GET, POST, PUT, DELETE, etc.
                ...(method === 'POST' ? {headers: jsonMimeType, body: JSON.stringify (body)} : {}),
                ...(method === 'PUT' ? {headers: jsonMimeType, body: JSON.stringify (body)} : {})
            });
            return response.json (); // parses response to JSON
        } catch (err) {
            console.error (err);
            return '{\'status\':\'error\'}';
        }
    }

    /**
     * Method to Create and Read todo item
     */
    function create_read_api() {
        // CREATE
        callAPI ('POST', '/api/today/', null, {
            'completed': false,
            'completedAt': null,
            'owner': '5cbde27650e1537a95fb57ff',
            'desc': 'Create and Read from API',
            '__v': 0
        })
            .then (() => {
                // READ
                callAPI ('GET', '/api/today/5cb0e1ccf7d9033e18a5be80', null, null)
                    .then (() => {
                        location.reload ();
                    }).catch ((err) => {
                    console.error (err);
                });
            })
            .catch ((err) => {
                console.error (err);
            });
    }

    function update_api(todoid) {
        // UPDATE
        const updateTodo = {
            'desc': 'Update from API'
        };
        callAPI ('PUT', '/api/today/' + todoid, null, updateTodo)
            .then (() => {
                location.reload ();
            }).catch ((err) => {
            console.error (err);
        });
    }

    function delete_api(todoid) {
        // DELETE
        callAPI ('DELETE', '/api/today/' + todoid, null, null)
            .then (() => {
                location.reload ();
            }).catch ((err) => {
            console.error (err);
        });
    }


    // Calls our test functions when we click the button
    $ ('#create_read').click (() => {
        create_read_api ();
    });
    $ ('#update').click (evt => {
        const todoid = $ (evt.target).attr ('data-todo');
        update_api (todoid);
    });
    $ ('#delete').click (evt => {
        const todoid = $ (evt.target).attr ('data-todo');
        delete_api (todoid);
    });


});