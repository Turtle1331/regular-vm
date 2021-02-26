function Table() {
    return (
        <div>
            <div className="contents">
                <h3>What is REGULAR-VM?</h3>
                <div className="comfy">
                    REGULAR-VM is a simple instruction set architecture designed by Saagar Jha for educational purposes.
                    Being a RISC architecture, it has a small set of instructions (17 in total) which provide basic arithmetic and memory operations.
                    Unlike other RISC architectures, it is quite minimal and lacks instructions for control flow or floating-point arithmetic.
                    Instead, jumping and branching is achieved by adding a value to <span className="code">r0</span> (program counter).
                    It also proposes a restrictive calling convention: all registers except for <span className="code">r0</span>, <span className="code">r30</span> (assembler temporary), and <span className="code">r31</span> (stack pointer) are callee-saved.
                    REGULAR-VM's restrictions are intended to pose interesting challenges for implementing conditional branching, 32-bit immediate loads, function calls, and assembler macros.
                    <br />
                    <br />
                    REGULAR-VM stands for <u>R</u>ISC <u>E</u>ducational <u>G</u>eneralized <u>U</u>ti<u>L</u>ity <u>A</u><u>R</u>chitecture <u>V</u>irtual <u>M</u>achine.
                </div>
                <br />
                <h3>Who uses it?</h3>
                <div className="comfy">
                    Here are some projects based on REGULAR-VM:
                    <br />
                    <br />
                    <table>
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Created By</th>
                                <th>Description</th>
                                <th>Language</th>
                                <th>License</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="https://github.com/regular-vm">regular-vm</a></td>
                                <td><a href="https://github.com/saagarjha">Saagar Jha</a></td>
                                <td>Official specification, reference emulator, and disassembler for REGULAR-VM</td>
                                <td>C++</td>
                                <td>none</td>
                            </tr>
                            <tr>
                                <td><a href="https://github.com/Turtle1331/regular-vm-python">regular-vm-python</a></td>
                                <td><a href="https://github.com/Turtle1331">Turtle1331</a></td>
                                <td>Emulator supporting multiple file formats, with experimental support the Device API extension</td>
                                <td>Python</td>
                                <td>none</td>
                            </tr>
                            <tr>
                                <td><a href="https://github.com/Turtle1331/regular-vm-wasm">regular-vm-wasm</a></td>
                                <td><a href="https://github.com/Turtle1331">Turtle1331</a></td>
                                <td>Work-in-progress emulator intended for portability and performance</td>
                                <td>WebAssembly</td>
                                <td>none</td>
                            </tr>
                            <tr>
                                <td><a href="https://github.com/xdrie/irre-tools">irre-tools</a></td>
                                <td><a href="https://github.com/xdrie">xdrie</a></td>
                                <td>Emulator, assembler, and C compiler for IRRE, an architecture inspired by REGULAR-VM and RISC-V</td>
                                <td>D</td>
                                <td>Apache-2.0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br />
            </div>
        </div>
    );
}

export default Table;
