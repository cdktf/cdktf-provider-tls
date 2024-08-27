// https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/private_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the algorithm to use when generating the private key. Currently-supported values are: `RSA`, `ECDSA`, `ED25519`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/private_key#algorithm PrivateKey#algorithm}
  */
  readonly algorithm: string;
  /**
  * When `algorithm` is `ECDSA`, the name of the elliptic curve to use. Currently-supported values are: `P224`, `P256`, `P384`, `P521`. (default: `P224`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/private_key#ecdsa_curve PrivateKey#ecdsa_curve}
  */
  readonly ecdsaCurve?: string;
  /**
  * When `algorithm` is `RSA`, the size of the generated RSA key, in bits (default: `2048`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/private_key#rsa_bits PrivateKey#rsa_bits}
  */
  readonly rsaBits?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/private_key tls_private_key}
*/
export class PrivateKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tls_private_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivateKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateKey to import
  * @param importFromId The id of the existing PrivateKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/private_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tls_private_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.5/docs/resources/private_key tls_private_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateKeyConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'tls_private_key',
      terraformGeneratorMetadata: {
        providerName: 'tls',
        providerVersion: '4.0.5',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithm = config.algorithm;
    this._ecdsaCurve = config.ecdsaCurve;
    this._rsaBits = config.rsaBits;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // ecdsa_curve - computed: true, optional: true, required: false
  private _ecdsaCurve?: string; 
  public get ecdsaCurve() {
    return this.getStringAttribute('ecdsa_curve');
  }
  public set ecdsaCurve(value: string) {
    this._ecdsaCurve = value;
  }
  public resetEcdsaCurve() {
    this._ecdsaCurve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecdsaCurveInput() {
    return this._ecdsaCurve;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // private_key_openssh - computed: true, optional: false, required: false
  public get privateKeyOpenssh() {
    return this.getStringAttribute('private_key_openssh');
  }

  // private_key_pem - computed: true, optional: false, required: false
  public get privateKeyPem() {
    return this.getStringAttribute('private_key_pem');
  }

  // private_key_pem_pkcs8 - computed: true, optional: false, required: false
  public get privateKeyPemPkcs8() {
    return this.getStringAttribute('private_key_pem_pkcs8');
  }

  // public_key_fingerprint_md5 - computed: true, optional: false, required: false
  public get publicKeyFingerprintMd5() {
    return this.getStringAttribute('public_key_fingerprint_md5');
  }

  // public_key_fingerprint_sha256 - computed: true, optional: false, required: false
  public get publicKeyFingerprintSha256() {
    return this.getStringAttribute('public_key_fingerprint_sha256');
  }

  // public_key_openssh - computed: true, optional: false, required: false
  public get publicKeyOpenssh() {
    return this.getStringAttribute('public_key_openssh');
  }

  // public_key_pem - computed: true, optional: false, required: false
  public get publicKeyPem() {
    return this.getStringAttribute('public_key_pem');
  }

  // rsa_bits - computed: true, optional: true, required: false
  private _rsaBits?: number; 
  public get rsaBits() {
    return this.getNumberAttribute('rsa_bits');
  }
  public set rsaBits(value: number) {
    this._rsaBits = value;
  }
  public resetRsaBits() {
    this._rsaBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaBitsInput() {
    return this._rsaBits;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.stringToTerraform(this._algorithm),
      ecdsa_curve: cdktf.stringToTerraform(this._ecdsaCurve),
      rsa_bits: cdktf.numberToTerraform(this._rsaBits),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecdsa_curve: {
        value: cdktf.stringToHclTerraform(this._ecdsaCurve),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rsa_bits: {
        value: cdktf.numberToHclTerraform(this._rsaBits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
