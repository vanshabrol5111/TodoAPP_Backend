const todo=require("../todosschema/todo")

async function posttodo(req,res) {
    try{
     const {title,description} = req.body;
     
     if(!title || !description )
     {
         return res.status(400).json({
             message:"Enter all details"
         })
     }
  
     const findtodo = await todo.findOne({title:title});
   
     if(findtodo)
     {
         return res.status(400).json({
             message : "todo Already Exist"
         })
     }
     const tododata = await todo.create({
         title : title,
         description : description,
         iscompleted : false,
     })
 
     res.status(200).json({
         message :"Data Created Successfully",
        todoss : tododata 
     })
    }
    catch (err){
     res.status(500).json({
         message :"Data Creation Failed",
         error : err 
     })
    }
 }
 

 async function gettodo(req, res) {
    console.log('calledd');

    try {
        const todos = await todo.find();
        if (todos.length > 0) {
            console.log("Fetched todos:", todos);
            return res.json({
                msg: 'Todos fetched successfully',
                product: todos
            });
        } else {
            return res.json({
                msg: 'No todos found',
                product: []
            });
        }
    } catch (error) {
        console.error("Error fetching todos:", error);
        return res.status(500).json({
            msg: 'Error fetching todos',
            err: error.message
        });
    }
}



 
  async function puttodo(req,res) {
    try{
        const {id} = req.body; 
        const{title,description} = req.body;
        if(!title || !description )
        {
            return res.status(400).json({
                message:"Enter all details"
            })
        }
        const tododata = await todo.findByIdAndUpdate({_id : id},{
            title : title,
            description : description,
           
    
        })
    
        res.status(200).json({
            message :"todo Updated Successfully",
            book : tododata 
        })
    }
    catch (err){
        res.status(500).json({
            message :"Error Updating todo",
           error : err
        })
    }
}

  
          
    

        async function deletetodo(req, res) {

        //   console.log("hiytt");
          
            try {
              const { id} = req.body;
              console.log(id);
              
          
              if (!id) {
                return res.status(400).json({
                  message: "ID is required",
                });
              }
          
              const tododata = await todo.findByIdAndDelete(id);
          
              if (!tododata) {
                return res.status(404).json({
                  message: "todo not found",
                });
              }
          
              res.status(200).json({
                message: "todo Deleted Successfully",
                todoss: tododata,
                success: true
              });
            } catch (err) {
              console.error(err); // Log the error for debugging
              res.status(500).json({
                message: "todo Deletion Failed",
                success: false
              });
            }
          }
      
        async function patchtodo(req,res) {

          try{
            const {id} = req.body
            const{iscompleted} = req.body;
        
            const tododata = await todo.findByIdAndUpdate({_id:id},{
                iscompleted:iscompleted
            })
        
            res.status(200).json({
                message :"todo Updated Successfully",
                todoss : tododata 
            })
          }
          catch (err){
            res.status(500).json({
                message :"Error Updating todo status",
               error :err
      })
        }
        }
          

 module.exports={posttodo,gettodo,puttodo,deletetodo,patchtodo}