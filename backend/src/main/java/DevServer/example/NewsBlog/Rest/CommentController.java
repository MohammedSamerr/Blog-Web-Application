package DevServer.example.NewsBlog.Rest;

import DevServer.example.NewsBlog.Service.CommentService;
import DevServer.example.NewsBlog.entity.Comment;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/home")
public class CommentController {

    @Autowired
    CommentService commentService;

    @PostMapping(path = "/comment/create")
    public ResponseEntity<?> createComment(@RequestParam Long postId ,@RequestParam String postedBy,@RequestBody String content){
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(commentService.createComment(postId,postedBy,content));
        }catch (Exception ex){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ex.getMessage());
        }

    }

    @GetMapping(path = "/comment/getall/{postId}")
    public ResponseEntity<?> getAllComment(@PathVariable Long postId){
        try {
            return ResponseEntity.ok(commentService.getAllComments(postId));
        }catch (EntityNotFoundException ex){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Something Went Wrong");
        }
    }



}

