import 'package:flutter/material.dart';

class CircularPic extends StatelessWidget {
  const CircularPic({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 225,
      height: 225,
      margin: EdgeInsets.all(MediaQuery.of(context).size.width * 0.05),
      decoration: const BoxDecoration(
        shape: BoxShape.circle,
        image: DecorationImage(
          image: AssetImage('zulhijaya.jpeg'),
        ),
      ),
    );
  }
}
